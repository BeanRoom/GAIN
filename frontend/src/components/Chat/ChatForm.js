// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    background-color: red;
    height: 100%;
`
class ChatForm extends React.Component{
    render(){
        return(
            <Wrapper>ChatForm</Wrapper>
        )
    }
}

export default ChatForm;