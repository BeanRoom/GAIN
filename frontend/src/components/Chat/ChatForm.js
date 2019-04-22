// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import ChatList from './ChatList'

const Wrapper = styled.div`
    flex: 1;
    background-color: white;
    height: 100%;
    overflow-y: scroll;
`
class ChatForm extends React.Component{
    render(){
        return(
            <Wrapper>
                <ChatList/>
            </Wrapper>
        )
    }
}

export default ChatForm;