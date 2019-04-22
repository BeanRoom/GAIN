// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Menubar from 'components/Base/Bar/Menubar'

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

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

const Serverbar = styled.div`
    background-color: green;
    width: 150px;
    height: 100%;
`

const Channelbar = styled.div`
    background-color: yellow;
    width: 150px;
    height: 100%;
`

const ChatForm = styled.div`
    flex: 1;
    background-color: red;
    height: 100%;
`

class Home extends React.Component{
    render(){
        return(
            <Wrapper>
                <GlobalStyle />
                <Menubar>Menubar</Menubar>
                <Serverbar>Serverbar</Serverbar>
                <Channelbar>Channelbar</Channelbar>
                <ChatForm>chat</ChatForm>
            </Wrapper>
        )
    }
}

export default Home;