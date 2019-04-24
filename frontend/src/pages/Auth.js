// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AuthContainer from 'containers/Auth/AuthContainer';

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        margin: 0px;
    }
    #root{
        height: 100%;
    }
    .App{
        height: 100%;
    }
`

class Auth extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <AuthContainer />
      </div>
    );
  }

}

export default Auth;