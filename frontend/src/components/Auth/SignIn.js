// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { SignInContainer, FormContainer, Form, StyledH1, StyledSpan, StyledInput, StyledA, StyledButton } from 'components/Auth/Style';
import * as AuthApi from 'lib/api/auth';

@inject("authToggle")
@inject("authStore")
@observer
class SignIn extends React.Component {
  @observable email = ''
  @observable passwords = ''

  render() {
    const { email, password } = this
    const { rightPanelActive } = this.props.authToggle;

    return(
      <SignInContainer rightPanelActive={rightPanelActive}>
          <Form>
            <StyledH1>로그인</StyledH1>
              <StyledInput name="email" placeholder="Email" onChange={this.onChange} value={email} />
              <StyledInput
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                value={password}
              />
            <StyledA>Forgot your password?</StyledA>
            <StyledButton onClick={this.onSubmit}>로그인</StyledButton>
          </Form>
      </SignInContainer>
    )
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action.bound
  onSubmit() {
    const { Login } = this.props.authStore;
    const { email, password } = this;
    Login({ email, password });
  }
}

export default SignIn;