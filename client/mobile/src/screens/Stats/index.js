// @flow

import React from 'react';
import { View } from 'react-native';
import idx from 'idx';
import { Progress } from 'antd-mobile-rn';
import { SectionTitle, InfoSection, ScreenContainer } from './style';
import type { NavigationProps } from 'react-navigation';
import {
  createStatsContainer,
  Nationalities
} from '../../../../web/pages/stats/shared';
import App from '../../../../web/pages/app';
import type { Stats } from '../../../../web/pages/stats/shared';

const StatsView = (props: { data: ?Stats }) => (
  <>
    <View>
      <SectionTitle>
        Top Countries
      </SectionTitle>
      <Nationalities
        data={props.data}
        Progress={item =>
          <Progress percent={item.percent} />
        }
      />
    </View>
    <InfoSection data={props.data} />
  </>
);

const StatsContainer = createStatsContainer(StatsView);

class StatsScreen extends React.Component<{}> {
  static navigationOptions = ({ navigation }: NavigationProps) => ({
    headerTitle: 'Stats'
  });

  render() {
    return (
      <App
        render={({ stats }: { stats: Stats }) =>
          <ScreenContainer>
            <StatsContainer data={stats} />
          </ScreenContainer>
        }
      />
    );
  }
}

export default StatsScreen;
