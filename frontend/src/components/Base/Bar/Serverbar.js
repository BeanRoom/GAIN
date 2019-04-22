// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: green;
    width: 150px;
    height: 100%;
`

class Serverbar extends React.Component{
    render(){
        return(
            <Wrapper>Serverbar</Wrapper>
        )
    }
}

export default Serverbar;