// @flow
import React, { Component } from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';
import Flights, { FlightsContext } from 'shared/containers/flights';

// todo - revise - not really happy with the inject solution
injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const DRAG_SPD = 0.005;
const ROTATION_LIMIT_X = 1.0;
const ROTATION_EASE = 0.15;
const AUTO_ROTATION_SPD = 0.003;
const BG_ROTATION_MULTIPLIER = 0.5;

class Globe extends Component {
  constructor(props) {
    super(props);
    this.globeRef = React.createRef();

    this.threeCheckInterval = null;

    this.loop = this.loop.bind(this);
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handlePointerMove = this.handlePointerMove.bind(this);
  }

  componentDidMount() {
    // todo - not ideal, but current workaround for nextjs + threejs combination
    this.threeCheckInterval = setInterval(() => {
      if (THREE) {
        clearInterval(this.threeCheckInterval);
        // three inited -> setup
        this.threeSetup();
        this.startLoop();
      }
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.threeCheckInterval);
    this.stopLoop();
  }

  // -------------------------------------------------------
  // Loop
  // -------------------------------------------------------

  loop() {
    this.threeUpdate();
    this.loopRef = window.requestAnimationFrame(this.loop);
  }

  startLoop() {
    if (!this.loopRef) {
      this.loopRef = window.requestAnimationFrame(this.loop);
    }
  }

  stopLoop() {
    window.cancelAnimationFrame(this.loopRef);
  }

  // -------------------------------------------------------
  // three.js
  // -------------------------------------------------------

  // todo - probably split three stuff into separate class

  threeSetup() {
    this.camera = null;
    this.scene = null;
    this.spaceMesh = null;
    this.globeGroup = null;

    this.dragging = false;
    this.lstX = 0;
    this.lstY = 0;
    this.rX = 0;
    this.rY = 0;
    this.vX = 0;
    this.vY = 0;

    this.threeSetBase();
    this.threeSetGlobe();
    this.threeSetFlights();
  }

  threeSetBase() {
    const lookVec = new THREE.Vector3(0, 0, 0);
    this.scene = new THREE.Scene();
    // todo - add zoom to camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 3.9;
    this.camera.lookAt(lookVec);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // todo - reset camera boundaries on window resize
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.globeRef.current.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0xffffff));
    const light = new THREE.DirectionalLight(0xffffff, 0.15);
    light.position.set(5, 3, 5);
    this.scene.add(light);
  }

  threeSetGlobe() {
    // bg
    const spaceGeo = new THREE.SphereGeometry(6, 12, 9);
    const spaceMat = new THREE.MeshBasicMaterial();
    spaceMat.map = new THREE.TextureLoader().load('/static/img/globe-bg.jpg');
    spaceMat.side = THREE.BackSide;
    this.spaceMesh = new THREE.Mesh(spaceGeo, spaceMat);
    this.scene.add(this.spaceMesh);

    // globe
    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    const globeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load('/static/img/land.jpg'),
        bumpMap: new THREE.TextureLoader().load('/static/img/bump.jpg'),
        bumpScale: 0.01,
        specularMap: new THREE.TextureLoader().load('/static/img/water.png'),
        specular: new THREE.Color('grey'),
      })
    );
    globeMesh.rotation.y = Math.PI;
    this.globeGroup.add(globeMesh);
  }

  threeSetFlights() {
    const triH = 0.018;
    const triW = 0.012;
    const geom = new THREE.Geometry();
    const v1 = new THREE.Vector3(0, -triH, 0);
    const v2 = new THREE.Vector3(-triW, triH, 0);
    const v3 = new THREE.Vector3(triW, triH, 0);

    geom.vertices.push(v1);
    geom.vertices.push(v2);
    geom.vertices.push(v3);

    geom.faces.push(new THREE.Face3(0, 1, 2));
    geom.computeFaceNormals();

    const material = new THREE.MeshBasicMaterial();
    material.transparent = true;
    material.opacity = 0.8;
    material.side = THREE.DoubleSide;

    this.props.flights.forEach(flight => {
      const planeMesh = new THREE.Mesh(geom, material);
      const planePosition = this.latLongPos(
        flight.location.lat,
        flight.location.lng,
        1.22 + Math.random() * 0.05
      );
      // todo - try to set position directly as vector
      planeMesh.position.x = planePosition.x;
      planeMesh.position.y = planePosition.y;
      planeMesh.position.z = planePosition.z;
      planeMesh.lookAt(this.globeGroup.position);
      // todo - revise rotation - not working properly on the other side of globe - maybe normalize first
      planeMesh.rotation.z = (flight.orientation * Math.PI) / 180;
      this.globeGroup.add(planeMesh);
    });
  }

  latLongPos(lat, lng, radius) {
    const llPhi = (lng * Math.PI) / 180;
    const llTheta = (lat * Math.PI) / 180;
    return new THREE.Vector3(
      -radius * Math.cos(llPhi) * Math.cos(llTheta),
      radius * Math.sin(llPhi),
      radius * Math.cos(llPhi) * Math.sin(llTheta)
    );
  }

  threeControlsUpdate() {
    if (this.dragging) {
      // calc spds
      this.vX = (this.rX - this.globeGroup.rotation.x) * ROTATION_EASE;
      this.vY = (this.rY - this.globeGroup.rotation.y) * ROTATION_EASE;
      // rotate earth
      this.globeGroup.rotation.x += this.vX;
      this.globeGroup.rotation.y += this.vY;
    } else {
      // automatic rotation
      this.globeGroup.rotation.y += AUTO_ROTATION_SPD;
    }

    // rotate bg
    this.spaceMesh.rotation.x =
      this.globeGroup.rotation.x * -BG_ROTATION_MULTIPLIER;
    this.spaceMesh.rotation.y =
      this.globeGroup.rotation.y * -BG_ROTATION_MULTIPLIER;
  }

  threeUpdate() {
    this.threeControlsUpdate();
    this.renderer.render(this.scene, this.camera);
  }

  // -------------------------------------------------------
  // globe rotation
  // -------------------------------------------------------

  handlePointerMove(e) {
    if (this.dragging) {
      const newX = e.pageX;
      const newY = e.pageY;
      // horizontal
      this.rY += (newX - this.lstX) * DRAG_SPD;
      this.lstX = newX;
      // vertical
      this.rX += (newY - this.lstY) * DRAG_SPD;
      if (this.rX > ROTATION_LIMIT_X) {
        this.rX = ROTATION_LIMIT_X;
      } else if (this.rX < -ROTATION_LIMIT_X) {
        this.rX = -ROTATION_LIMIT_X;
      }
      this.lstY = newY;
    }
  }

  handlePointerDown(e) {
    this.dragging = true;
    // init values
    this.lstX = e.pageX;
    this.lstY = e.pageY;

    // save position to prevent jump on drag start
    this.rX = this.globeGroup.rotation.x;
    this.rY = this.globeGroup.rotation.y;
  }

  handlePointerUp() {
    this.dragging = false;
  }

  // -------------------------------------------------------
  // render
  // -------------------------------------------------------

  render() {
    return (
      <div
        ref={this.globeRef}
        onPointerDown={this.handlePointerDown}
        onPointerUp={this.handlePointerUp}
        onPointerMove={this.handlePointerMove}
      />
    );
  }
}

const Page = () => (
  <Flights>
    <FlightsContext.Consumer>
      {flights => (
        <React.Fragment>
          <Head>
            <title>Live Globe</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/94/three.min.js" />
          </Head>
          <Globe flights={flights} />
        </React.Fragment>
      )}
    </FlightsContext.Consumer>
  </Flights>
);

export default Page;
