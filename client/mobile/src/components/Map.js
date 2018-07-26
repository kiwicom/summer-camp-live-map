// @flow
import Mapbox from '@mapbox/react-native-mapbox-gl';
import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
`;

const StyledMap = styled(Mapbox.MapView)`
  flex: 1;
`;

type Props = {|
  +token: string,
  +featureCollection: {},
  +zoomLevel: number,
  +centerCoordinate: [number, number],
  +icon: string,
  +styleURL: string,
|};

class MapComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    Mapbox.setAccessToken(props.token);
  }

  render() {
    const {
      featureCollection,
      styleURL,
      zoomLevel,
      centerCoordinate,
      icon,
    } = this.props;

    const iconStyles = Mapbox.StyleSheet.create({
      iconImage: icon,
      iconRotate: Mapbox.StyleSheet.identity('rotation'),
      iconRotationAlignment: 'map',
      iconAllowOverlap: true,
    });

    return (
      <Container>
        <StyledMap
          styleURL={styleURL}
          zoomLevel={zoomLevel}
          centerCoordinate={centerCoordinate}
        >
          <Mapbox.ShapeSource id="Flights" shape={featureCollection}>
            <Mapbox.SymbolLayer id="Plane" style={iconStyles} />
          </Mapbox.ShapeSource>
        </StyledMap>
      </Container>
    );
  }
}

export default MapComponent;
