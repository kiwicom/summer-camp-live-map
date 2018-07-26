// @flow

import * as React from 'react';
import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native'; // eslint-disable-line

const mul = Platform.OS === 'web' ? 1 : -1;

const InfoTitle = styled(Text)`
  font-size: 24px;
  padding: 5px;
  text-align: center;
`;

const InfoValue = styled(Text)`
  font-size: 18px;
  text-align: center;
`;

export const PlaneTakingOff = styled(Image)`
  height: 32px;
  width: 32px;
  transform: rotate(${mul * -45}deg);
`;

export const ActivePlanes = styled(Image)`
  height: 32px;
  width: 32px;
`;

export const PlaneLanding = styled(Image)`
  height: 32px;
  width: 32px;
  transform: rotate(${mul * 45}deg);
`;

const ImageContainer = styled(View)`
  margin-left: auto;
  margin-right: auto;
`;

export type InfoItemProps = {|
  +title: string;
  +value: number;
  +Icon: React.Node;
|};
const InfoItem = (props: InfoItemProps) => (
  <View>
    <ImageContainer>
      {props.Icon}
    </ImageContainer>
    <InfoTitle>{ props.title }</InfoTitle>
    <InfoValue>{ props.value }</InfoValue>
  </View>
);

export default InfoItem;
