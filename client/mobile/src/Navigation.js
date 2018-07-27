// @flow

import { createStackNavigator } from 'react-navigation';
import Map from './screens/Map';
import Stats from './screens/Stats';

const Navigation = createStackNavigator({
  Map: {
    screen: Map,
  },
  Stats: {
    screen: Stats,
  },
}, {
  mode: 'modal',
});

export default Navigation;
