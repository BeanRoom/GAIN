// @flow
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Serverbar from 'components/Base/Bar/Serverbar'
import DMbar from 'components/Base/Bar/DMbar'
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
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
                <GlobalStyle />
                <Serverbar/>
                <DMbar/>
                <ChatForm/>
            </Wrapper>
        )
    }
}

export default Home;