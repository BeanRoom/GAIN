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

const DMButton = styled.a`
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: white;

    &:hover{
        background-color: ${oc.indigo[7]};
    }
`

class DMbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <DMButton>Home</DMButton>
                <DMButton>Board</DMButton>
            </Wrapper>
        )
    }
}

export default DMbar;