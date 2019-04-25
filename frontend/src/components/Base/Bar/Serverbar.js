// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: ${oc.indigo[8]};
    width: 150px;
    min-width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
     }
`

const Server = styled(NavLink)`
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: white;

    &:hover{
        background-color: ${oc.indigo[7]};
    }
`

const Home = styled(NavLink)`
    width: 100%;
    min-height: 50px;
    line-height: 50px;
    ${shadow(0)}
    text-align: center;

    &:link{
        text-decoration: none;
    }

    &:visited{
        text-decoration: none;
    }

    &:hover{
        text-decoration: none;
    }

    &:active {
        text-decoration: none;
    }
`

const H1 = styled.h1`
    margin: 0px;
    font-size: 1.5em;
`

const ServerWrapper = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
`

class Serverbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Home to='/channels/@me/'><H1>GAIN</H1></Home>
                <ServerWrapper>
                    <Server>server 1</Server>
                    <Server>server 2</Server>
                    <Server>server 3</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                    <Server>server 4</Server>
                </ServerWrapper>
            </Wrapper>
        )
    }
}

export default Serverbar;