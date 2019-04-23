// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: left;
    margin-left: 5px;
    display: flex;
`

const H3 = styled.h3`
    margin: 0px;
`

const MessageBubble = ({chat}) => {
    return (
        <Container>
            <H3>{chat.writer}</H3>
            <span>{chat.msg}</span>
        </Container>
    )
}

export default MessageBubble;