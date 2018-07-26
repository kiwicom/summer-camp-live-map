// @flow

import * as React from 'react';
import { Image, View } from 'react-native'; // esling-disable-line
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import type { Response } from 'isomorphic-unfetch';
import { graphql, createFragmentContainer } from 'react-relay';
import QueryRenderer from '../query-renderer';
import type { Location } from './__generated__/FlagQuery.graphql';

const Image_ = styled(Image)`
  width: 32px;
  height: 32px;
`;
const ImageContainer = styled(View)`
  width: 32px;
  height: 32px;
`;

type Props = {|
  location: Location;
|};
const Flag = (props: Props) => (
  <Image_ source={{ uri: props.location.countryFlagURL }} />
);

const FlagView = (props: { code: string }) => (
  <ImageContainer>
    <QueryRenderer
      query={graphql`
        query FlagQuery($locationId: String) {
          location(id: $locationId) {
            name
            code
            countryFlagURL
          }
        }
      `}
      variables={{ locationId: props.code }}
      render={(props: any) => <Flag {...props} />}
    />
  </ImageContainer>
);

export default FlagView;
