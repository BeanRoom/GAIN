// @flow
import React from 'react';
import styled from 'styled-components';
import SignUp from 'components/Auth/SignUp';
import SignIn from 'components/Auth/SignIn';
import Overlay from 'components/Auth/Overlay';
import { Div, Container} from 'components/Auth/Style';



class AuthContainer extends React.Component {
  render() {

    return (
      <div>
          <Div>
            <Container>
                <SignUp />
                <SignIn />
                <Overlay />
            </Container>
          </Div>
      </div>
    );
  }

}

export default AuthContainer;