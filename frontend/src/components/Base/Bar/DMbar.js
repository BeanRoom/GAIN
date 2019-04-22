// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

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

const Button = styled.a`
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
                <Button href='channels/@me/1'>kim</Button>
                <Button href='channels/@me/2'>lee</Button>
                <Button href='channels/@me/3'>choi</Button>
            </Wrapper>
        )
    }
}

export default DMbar;