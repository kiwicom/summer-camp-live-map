// @flow

import * as React from 'react';
import { Image } from 'react-native'; // esling-disable-line
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import type { Response } from 'isomorphic-unfetch';

const Image_ = styled(Image)`
  width: 32px;
  height: 32px;
`;

function getQueryForCode(code: string) {
  return {
    query: `{
        location(id: "${code}") {
          name
          code
          countryFlagURL
        }
      }
    `,
    variables: null,
    operationName: null,
  };
}

function checkStatus(response: Response): Response {
  if (!response.ok) {
    throw new Error(response);
  }
  return response;
}

type FlagProps = {|
  code: string;
|};
type FlagState = {|
    imageUrl: ?string;
    retrieved: boolean;
|};
export default class Flag extends React.Component<FlagProps, FlagState> {
  state = { imageUrl: undefined, retrieved: false };

  componentDidMount() {
    if (!this.state.retrieved) {
      fetch('https://graphql.kiwi.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(getQueryForCode(this.props.code))
      })
      .then(checkStatus)
      .then(response => response.json())
      .then(response =>
        this.setState({
          imageUrl: response.data.location.countryFlagURL,
          retrieved: true,
        })
      )
      .catch(error => {
        this.setState({ retrieved: true });
      });
    }
  }

  render() {
    return (
      <Image_
        source={{ uri: this.state.imageUrl }}
      />
    );
  }
}
