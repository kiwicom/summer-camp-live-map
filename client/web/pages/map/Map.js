// @flow

import React, { Component } from 'react';

import styled from 'styled-components';

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

type Props = {|
  +token: string,
  +featureCollection: {},
  +zoomLevel: number,
  +centerCoordinate: [number, number],
  +icon: string,
  +styleURL: string,
|};
class MapView extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {
      token,
      featureCollection,
      styleURL,
      zoomLevel,
      centerCoordinate,
      icon,
    } = this.props;

    const mapboxgl = require('mapbox-gl');

    const mapbox = Object.assign(mapboxgl, {
      accessToken: token,
    });
    this.map = new mapbox.Map({
      container: this.mapRef.current,
      style: styleURL,
      center: centerCoordinate,
      zoom: zoomLevel,
    });

    this.map.on('load', () => {
      this.map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: featureCollection,
        },
        layout: {
          'icon-image': icon,
          'icon-rotate': ['get', 'rotation'],
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
        },
      });
    });
  }

  render() {
    return <Map innerRef={this.mapRef} />;
  }
}

export default MapView;
