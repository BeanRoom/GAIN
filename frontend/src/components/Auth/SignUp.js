// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { SignUpContainer, Form, StyledH1, StyledSpan, StyledInput, StyledButton } from 'components/Auth/Style';
import * as AuthApi from 'lib/api/auth';

@inject("authToggle")
@observer
class SignUp extends React.Component {
  @observable id = ''
  @observable authCode = ''
  @observable password = ''
  @observable passwordCheck = ''

  render() {
    const { id, authCode, password, passwordCheck } = this
    const { rightPanelActive } = this.props.authToggle;

    return(
      <SignUpContainer rightPanelActive={rightPanelActive}>
        <Form onSubmit={this.onSubmit}>
          <StyledH1>계정 생성</StyledH1>
          <StyledSpan>학생 인증코드가 필요합니다.</StyledSpan>
          <StyledInput name="id" placeholder="Id" onChange={this.onChange} value={id} onKeyPress={this.onPress} />
          <StyledInput name="authCode" placeholder="인증코드" onChange={this.onChange} value={authCode} onKeyPress={this.onPress} />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={password}
            onKeyPress={this.onPress} 
          />
          <StyledInput
            name="passwordCheck"
            type="password"
            placeholder="PasswordCheck"
            onChange={this.onChange}
            value={passwordCheck}
            onKeyPress={this.onPress} 
          />
          <StyledButton onClick={this.onSubmit}>회원가입</StyledButton>
        </Form>
      </SignUpContainer>
    )
  }

  @action.bound
  onPress(f){
    if(f.key === 'Enter'){
      this.onSubmit();
    }
  }
  
  @action.bound
  onChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  @action.bound
  onSubmit() {
    const { userName, email, password } = this;
    AuthApi.localRegister({
      "email": email, 
      "username": userName, 
      "password": password
    });
  }
}

export default SignUp;