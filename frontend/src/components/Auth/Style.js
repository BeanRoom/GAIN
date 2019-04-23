import styled from 'styled-components';
import oc from 'open-color';

import img1 from 'static/1.png';
import img2 from 'static/2.png';

export const Div = styled.div`
  position: relative;
`

export const Container = styled.div`
  height: 100%;
  background-color: #ffffff;
  position:fixed;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 480px;
`

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;

  @keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }
  
    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
  }

  ${
    props => {
      if(props.rightPanelActive){
        return `
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        `
      }
      else{
        return `
          opacity: 0;
          z-index: 1;
        `
      }
    }
  }
`

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  left: 0;
  width: 50%;
  z-index: 2;
  ${
    props => {
      if(props.rightPanelActive){
        return `
        transform: translateX(100%);
        `
      }
    }
  }
`

export const StyledH1 = styled.h1`
  font-weight: bold;
  margin: 0;
`

export const StyledP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`

export const StyledSpan = styled.span`
  font-size: 12px;
`

export const StyledA = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`

export const StyledButton = styled.button`
  border-radius: 20px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  ${
      props => {
          if(props.ghost) {
              return `
                background-color: transparent;
                border-color: #ffffff;
              `
          }
          else{ 
              return `
                border: 1px solid ${oc.indigo[6]};
                background-color: ${oc.indigo[6]};
            `
          }
      }
  }
  
  &:active{
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`

export const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`

export const StyledInput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
`

export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;

    ${
      props => {
        if(props.rightPanelActive){
          return `
            transform: translateX(-100%);
          `
        }
      }
    }
`

export const OverlayDiv = styled.div`
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, ${oc.indigo[6]}, ${oc.indigo[7]});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;

    ${
      props => {
        if(props.rightPanelActive){
          return `
            transform: translateX(50%);
          `
        }
        else{
          return `
            transform: translateX(0);
            `
        }
      }
    }
    
    transition: transform 0.6s ease-in-out;
`

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transition: transform 0.6s ease-in-out;
    background-repeat: no-repeat;
    background-size: 55% 50%;
    background-position: bottom;
    ${
      props => {
        if(props.right) {
          if(props.rightPanelActive) {
            return `
              right: 0;
              transform: translateX(20%);
              background-image: url(${img1});
            `
          }
          else {
            return `
              right: 0;
              transform: translateX(0);
              background-image: url(${img1});
            `
          }
        }
        if(props.left) {
          if(props.rightPanelActive) {
            return `
              transform: translateX(0);
              background-image: url(${img2});
            `
          }
          else {
            return `
              transform: translateX(-20%);
              background-image: url(${img2});
            `
          }
        }
      }
  }
`