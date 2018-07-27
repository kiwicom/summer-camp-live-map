// @flow

import React from 'react';
import { View, Button } from 'react-native';
import idx from 'idx';
import { Progress } from 'antd-mobile-rn';
import { type NavigationProps, NavigationActions } from 'react-navigation';
import { Nationalities } from 'shared/components/stats';
import { createStatsContainer }  from 'shared/containers/stats';
import App from 'shared/containers/app';
import type { Stats } from 'shared/containers/stats';
import { SectionTitle, InfoSection, ScreenContainer } from './style';

const StatsView = (props: { data: ?Stats }) => (
  <>
    <View>
      <SectionTitle>Top Countries</SectionTitle>
      <Nationalities
        data={props.data}
        Progress={item => <Progress percent={item.percent} />}
      />
    </View>
    <InfoSection data={props.data} />
  </>
);

const StatsContainer = createStatsContainer(StatsView);
const backAction = NavigationActions.back();

class StatsScreen extends React.Component<{||}> {
  static navigationOptions = ({ navigation }: NavigationProps) => ({
    headerTitle: 'Stats',
    headerLeft: () => (
      <Button
        title="Cancel"
        onPress={() => navigation.dispatch(backAction)}
      />
    ),
  });

  render() {
    return (
      <App
        render={({ stats }: { stats: Stats }) => (
          <ScreenContainer>
            <StatsContainer data={stats} />
          </ScreenContainer>
        )}
      />
    );
  }
}

export default StatsScreen;
