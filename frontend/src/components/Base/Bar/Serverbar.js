// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'


import Home from 'components/Base/Header/Home';
import ServerList from './ServerList';

const Wrapper = styled.div`
    background-color: ${oc.indigo[8]};
    width: 150px;
    min-width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
`


class Serverbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Home to='/channels/@me/'/>
                <ServerList />
            </Wrapper>
        )
    }
}

export default Serverbar;