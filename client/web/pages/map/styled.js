// @flow

import { injectGlobal } from 'styled-components';

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
