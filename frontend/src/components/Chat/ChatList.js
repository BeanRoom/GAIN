// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import MessageBubble from './MessageBubble';

const Box = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

class ChatList extends React.Component{
    render(){
        const { messages } = this.props;
        return(
            <Box>
                {
                    messages.map((chat, index) => 
                        <MessageBubble chat={chat} />
                    )
                }
            </Box>
        )
    }
}

export default ChatList;