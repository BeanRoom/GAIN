// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { NavLink } from 'react-router-dom';

const Component = styled.div`
    margin: 5px;
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
        background-color: ${oc.gray[7]};
    }

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

const H4 = styled.h4`
    margin: 0px;
    margin-left: 10px;
    font-weight: normal;
`

const ServerList = () => {
    return (
        <Component>
            <Server><H4>Server1</H4></Server>
            <Server><H4>Server2</H4></Server>
            <Server><H4>Server3</H4></Server>
            <Server><H4>Server4</H4></Server>
            <Server><H4>Server5</H4></Server>
            <Server><H4>Server6</H4></Server>
            <Server><H4>Server7</H4></Server>
            <Server><H4>Server8</H4></Server>
            <Server><H4>Server9</H4></Server>
            <Server><H4>Server1</H4></Server>
            <Server><H4>Server1</H4></Server>
            <Server><H4>Server1</H4></Server>
        </Component>
    );
};

export default ServerList;