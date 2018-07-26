// @flow

import * as React from 'react';
import idx from 'idx';
import styled from 'styled-components';
import { View, Text } from 'react-native'; // eslint-disable-line
import Flag from '../Flag';
import type { Stats } from '../../containers/stats';

const Title = styled(Text)`
  font-size: 24px;
`;

const Passangers = styled(Text)`
  font-size: 18px;
`;

const ItemDetailWrapper = styled(View)`
  flex-direction: row;
`;

const ItemWrapper = styled(View)`
  padding: 10px;
`;

type ItemProps = {|
  +passengers: number;
  +code: string;
  +children: ?React.Node;
|};
export const Item = (props: ItemProps) => (
  <ItemWrapper>
    { props.children }
    <ItemDetailWrapper>
      <Flag code={props.code} />
      <Title>
        {' '}{ props.code }{' '}
        <Passangers>{ props.passengers }</Passangers>
      </Title>
    </ItemDetailWrapper>
  </ItemWrapper>
);

type NationalitiesProps = {|
  data: ?Stats;
  Progress: React.ComponentType<{ percent: number }>
|};
const Nationalities = (props: NationalitiesProps): React.Node => {
  const nationalities = idx(props, _ => _.data.topNationalities) || [];
  const total = nationalities.reduce((lhs, rhs) =>
    lhs + idx(rhs, _ => _.passengers) || 0
  , 0);

  return nationalities.map((item, i) => {
    const passengers = idx(item, _ => _.passengers) || 0;
    const code = idx(item, _ => _.code) || '';
    return (
      <View key={`${i}`}>
        <Item passengers={passengers} code={code}>
          <props.Progress percent={(passengers / total) * 100} />
        </Item>
      </View>
    );
  });
}

export default Nationalities;
