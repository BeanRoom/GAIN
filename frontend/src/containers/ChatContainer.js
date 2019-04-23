// @flow
import React from 'react';
import { Route } from 'react-router-dom';

import ChatForm from 'components/Chat/ChatForm';

class ChatContainer extends React.Component{
    render(){
        return(
            <>
                <Route path='/channels/@me/:id' component={ChatForm} />
            </>
        )
    }
}

export default ChatContainer;