// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import MessageBubble from './MessageBubble';

const Box = styled.div`
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;    
    
    &::-webkit-scrollbar{
        width: 5px;
        margin: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${oc.gray[5]};
    }

    &::-webkit-scrollbar-thumb {
        background: ${oc.gray[7]};
        height: 10%;
        border-radius: 10px;
    }
`

class ChatList extends React.Component{
    render(){
        const { messages } = this.props;
        return(
            <Box>
                {
                    messages.map((chat, index) => 
                        <MessageBubble chat={chat} key={index}/>
                    )
                }
            </Box>
        )
    }
}

export default ChatList;