// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

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

class Serverbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Server to='/channels/@me/'>Home</Server>
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
            </Wrapper>
        )
    }
}

export default Serverbar;