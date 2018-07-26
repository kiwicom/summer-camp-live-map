// @flow

import * as React from 'react';
import { Text } from 'react-native'; // eslint-disable-line
import App from '../app';
import { Nationalities, InfoRow, PageWrapper } from './styled';
import { Header } from './styled';
import { Button, Progress } from 'antd';
import { createStatsContainer } from './shared';
import type { Stats } from './shared';

type Props = {|
  +data: Stats,
|};

const StatsView = ({ data }: Props) => {
  return (
    <>
      <Header>Top countries</Header>
      <Nationalities
        data={data}
        Progress={item =>
          <Progress percent={item.percent} showInfo={false} />
        }
      />
      <InfoRow data={data} />
    </>
  );
};

const StatsContainer = createStatsContainer(StatsView);

const Page = () => (
  <App
    render={({ stats }: { stats: Stats }) =>
      <PageWrapper>
        <StatsContainer data={stats} />
      </PageWrapper>
    }
  />
);

export default Page;
