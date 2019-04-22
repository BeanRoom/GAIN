// @flow
import React from 'react';
import { Router } from 'react-router-dom';

import ChatForm from 'components/Chat/ChatForm';

class ChatContainer extends React.Component{
    render(){
        return(
            <>
                <ChatForm/>
            </>
        )
    }
}

export default ChatContainer;