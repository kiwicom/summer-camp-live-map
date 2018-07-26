// @flow

import styled, { injectGlobal } from 'styled-components';

// todo - revise - not really happy with the inject solution
injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
  }

  #__next {
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div``;
export const Map = styled.div`
  width: 100%;
  height: 100%;
`;
