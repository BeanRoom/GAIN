// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Menubar from 'components/Base/Bar/Menubar'
import Serverbar from 'components/Base/Bar/Serverbar'
import Channelbar from 'components/Base/Bar/Channelbar'
import ChatForm from 'components/Chat/ChatForm'

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