// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import ChatList from './ChatList'
import InputForm from './InputForm';

const Wrapper = styled.div`
    flex: 1;
    background-color: white;
    height: 100%;
    overflow-y: scroll;
    
    display: flex;
    flex-direction: column-reverse;

    &::-webkit-scrollbar{
        width: 5px;
        margin: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${oc.indigo[2]};
    }

    &::-webkit-scrollbar-thumb {
        background: ${oc.indigo[5]};
        height: 10%;
        border-radius: 10px;
    }
`

const Back = styled.div`
    flex: 1;
`

const ChatName = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    ${shadow(0)}
`

class ChatForm extends React.Component{
    state = {
        messages: [
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
                writer:'KYH'
            },
            {
                msg:'ㅁㄴㅇ러ㅑㅓㅁㄴㅇ러냠어럼냉래ㅑㅁㄴ애럼ㄴ어랴ㅐㅁㄴㅇㄻ넝랴ㅓㅁㄴㅇ럼냐어랴ㅐㅁㄴㅇ런맹램ㄴㅇㄹ',
                writer:'JHT'
            },
            {
                msg:'asdfasdfsdafasdfasdfasfasdfasdfasdfasdfsdfasdfasdfasdfsd',
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
                <ChatName>{this.props.match.params.id}</ChatName>
            </Wrapper>
        )
    }
}

export default ChatForm;