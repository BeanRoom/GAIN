// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import ChatList from './ChatList'
import InputForm from './InputForm';

import ChatTitle from 'components/Base/Header/ChatTitle';

const Wrapper = styled.div`
    flex: 1;
    background-color: ${oc.gray[0]};
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    
    display: flex;
    flex-direction: column-reverse;
`

const Back = styled.div`
    flex: 1;
`

class ChatForm extends React.Component{
    state = {
        messages: [
            {
                msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                writer:'KYH'
            },
            {
                msg:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                writer:'JHT'
            },
            {
                msg:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                writer:'KYH'
            },
            {
                msg:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                writer:'KYH'
            },            {
                msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                writer:'KYH'
            },
            {
                msg:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                writer:'JHT'
            },
            {
                msg:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                writer:'KYH'
            },
            {
                msg:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                writer:'KYH'
            },            {
                msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                writer:'KYH'
            },
            {
                msg:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                writer:'JHT'
            },
            {
                msg:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                writer:'KYH'
            },
            {
                msg:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                writer:'KYH'
            }
        ]
    }

    sendMessage = (data) => {
        this.setState({
          messages: [
            {
                writer: 'JHT',
                msg: data
            },
            ...this.state.messages
          ]
        })
    }

    render(){
        return(
            <Wrapper>
                <InputForm sendMessage={this.sendMessage} />
                <ChatList messages={this.state.messages}/>
                <Back/>
                <ChatTitle child={this.props.match.params.id} />
            </Wrapper>
        )
    }
}

export default ChatForm;