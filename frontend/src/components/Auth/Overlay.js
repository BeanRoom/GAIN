// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { OverlayContainer, OverlayDiv, OverlayPanel, StyledH1, StyledP, StyledButton } from 'components/Auth/Style';

@inject("authToggle")
@observer
class Overlay extends React.Component {
  @observable rightPanelActive = false;
  render(){
    const { rightPanelActive, Toggle } = this.props.authToggle;
    return (
      <OverlayContainer rightPanelActive={rightPanelActive}>
          <OverlayDiv rightPanelActive={rightPanelActive}>
              <OverlayPanel left={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>이미 계정이 있으신가요?</StyledH1>
                  <StyledP>
                    로그인하고 GAIN의 서비스를 누리세요.
                  </StyledP>
                  <StyledButton ghost={true} onClick={Toggle}>Sign In</StyledButton>
              </OverlayPanel>
              <OverlayPanel right={true} rightPanelActive={rightPanelActive}>
                  <StyledH1>계정이 없으신가요?</StyledH1>
                  <StyledP>
                    인증코드로 간단하게 가입하세요.
                  </StyledP>
                  <StyledButton ghost={true} onClick={Toggle}>Sign Up</StyledButton>
              </OverlayPanel>
          </OverlayDiv>
      </OverlayContainer>
    )
  }
}

export default Overlay;