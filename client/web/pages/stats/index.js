// @flow

import * as React from 'react';
import { Text } from 'react-native'; // eslint-disable-line
import App from 'shared/containers/app';
import { createStatsContainer } from 'shared/containers/stats';
import { Nationalities } from 'shared/components/stats';

import { Button, Progress } from 'antd';
import type { Stats } from 'shared/containers/stats';
import { InfoRow, PageWrapper, Header } from '../../components/stats/styled';

type Props = {|
  +data: Stats,
|};

const StatsView = ({ data }: Props) => (
  <>
    <Header>Top countries</Header>
    <Nationalities
      data={data}
      Progress={item => <Progress percent={item.percent} showInfo={false} />}
    />
    <InfoRow data={data} />
  </>
);

const StatsContainer = createStatsContainer(StatsView);

const Page = () => (
  <App
    render={({ stats }: { stats: Stats }) => (
      <PageWrapper>
        <StatsContainer data={stats} />
      </PageWrapper>
    )}
  />
);

export default Page;
