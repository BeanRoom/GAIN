// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Serverbar from 'components/Base/Bar/Serverbar'
import DMbar from 'components/Base/Bar/DMbar'
import ChatContainer from 'containers/ChatContainer'

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
                <Serverbar/>
                <DMbar/>
                <ChatContainer/>
            </Wrapper>
        )
    }
}

export default Home;