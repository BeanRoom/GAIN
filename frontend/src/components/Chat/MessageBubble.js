// @flow
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    text-align: left;
    margin-left: 5px;
    display: flex;
    word-wrap: break-word;
`

const H3 = styled.h3`
    margin: 0px;
`

const Span = styled.span`
    width: 100%;
    overflow-x: hidden; 
`

const MessageBubble = ({chat}) => {
    return (
        <Component>
            <H3>{chat.writer}</H3>
            <Span>{`${chat.msg}`}</Span>
        </Component>
    )
}

export default MessageBubble;