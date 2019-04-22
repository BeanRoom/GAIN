// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    background-color: ${oc.indigo[8]};
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Server = styled.a`
    color: white;
`

class Serverbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Server href="#">Home</Server>
                <Server>server 1</Server>
                <Server>server 2</Server>
                <Server>server 3</Server>
                <Server>server 4</Server>
            </Wrapper>
        )
    }
}

export default Serverbar;