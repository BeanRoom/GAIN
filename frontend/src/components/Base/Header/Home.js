// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import { NavLink } from 'react-router-dom';

const Style = styled(NavLink)`
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
        color: white;
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


const Home = () => {
    return (
        <Style>
            <H1>GAIN</H1>
        </Style>
    );
};

export default Home;