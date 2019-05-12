// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { NavLink } from 'react-router-dom';

const Component = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Button = styled(NavLink)`
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    color: white;
    
    &:hover{
        background-color: ${oc.gray[7]};
        text-decoration: none;
    }

    &:link{
        text-decoration: none;
    }

    &:visited{
        text-decoration: none;
        color: white;
    }    
    
    &:active{
        text-decoration: none;
    }

    &.active{
        background-color: #565E64;
    }
`

const H4 = styled.h4`
    margin: 0px;
    margin-left: 10px;
    font-weight: normal;
`

const Label = styled.div`
    text-align: left;
`

const H5 = styled.h5`
    color: ${oc.indigo[1]}
    margin-top: 10px;
    margin-bottom: 0px;
    margin-left: 15px;
    font-size: 0.7em;
`

const MenuWrapper = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
`

const DMWrapper = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
`

const ServerList = () => {
    return (
        <Component>
            <MenuWrapper>
                <Button to='/channels/@me/home' activeClassName="active"><H4>Home</H4></Button>
                <Button to='/channels/@me/board' activeClassName="active"><H4>Board</H4></Button>
            </MenuWrapper>
            <Label><H5>개인 메세지</H5></Label>
            <DMWrapper>
                <Button to='/channels/@me/1' activeClassName="active"><H4>Kim</H4></Button>
                <Button to='/channels/@me/2' activeClassName="active"><H4>Lee</H4></Button>
                <Button to='/channels/@me/3' activeClassName="active"><H4>Choi</H4></Button>
            </DMWrapper>
        </Component>
    );
};

export default ServerList;