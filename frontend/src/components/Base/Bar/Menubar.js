// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: blue;
    width: 50px;
    height: 100%;
`

class Menubar extends React.Component{
    render(){
        return(
            <Wrapper>Menubar</Wrapper>
        )
    }
}

export default Menubar;