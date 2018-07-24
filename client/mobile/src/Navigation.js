// @flow

import { createStackNavigator } from 'react-navigation';
import Map from './screens/Map';
import Stats from './screens/Stats';

const Navigation = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map'
    }
  },
  Stats: {
    screen: Stats,
    navigationOptions: {
      tabBarLabel: 'Stats'
    }
  }
});

export default Navigation;
