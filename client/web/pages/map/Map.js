// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import type { MapType } from 'mapbox-gl';
import { type MapComponentProps } from 'shared/containers/map';
import StatsButton from 'shared/components/StatsButton';

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

// Used to satisfy the button's `onPress` property requirement
const fn = () => {};

class MapView extends Component<MapComponentProps> {
  mapRef = React.createRef();
  map: MapType;

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
    return (
      <>
        <a href="/stats">
          <StatsButton title="Stats" onPress={fn} />
        </a>
        <Map innerRef={this.mapRef} />
      </>
    );
  }
}

export default MapView;
