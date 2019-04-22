// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: ${oc.indigo[6]};
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
     }
`

const Button = styled(Link)`
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: white;

    &:hover{
        background-color: ${oc.indigo[7]};
    }
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

class DMbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Button>Home</Button>
                <Button>Board</Button>
                <Label><H5>개인 메세지</H5></Label>
                <Button to='/channels/@me/1'>kim</Button>
                <Button to='/channels/@me/2'>lee</Button>
                <Button to='/channels/@me/3'>choi</Button>
            </Wrapper>
        )
    }
}

// TODO : Nav Link 연결, 이중 라우팅으로 채팅 구현, Redirect 컴포넌트 사용하여 Login페이지로 이동

export default DMbar;