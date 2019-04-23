// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import ChatList from './ChatList'
import InputForm from './InputForm';

const Wrapper = styled.div`
    flex: 1;
    background-color: white;
    height: 100%;
    overflow-y: scroll;
    
    display: flex;
    flex-direction: column-reverse;
`

class ChatForm extends React.Component{
    state = {
        messages: [
            'aaa',
            'bb'
        ]
    }

    sendMessage = (data) => {
        this.setState({
          messages: [
            data,
            ...this.state.messages
          ]
        })
    }

    render(){
        return(
            <Wrapper>
                {this.props.match.params.id}
                <InputForm sendMessage={this.sendMessage} />
                <ChatList messages={this.state.messages}/>
            </Wrapper>
        )
    }
}

export default ChatForm;