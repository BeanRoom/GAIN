// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

const Style = styled.div`
    width: 100%;
    min-height: 50px;
    line-height: 50px;
    // text-align: conter;
    ${shadow(0)}

    // &:after{
    //     content: "";
    //     margin: 0px auto;
    //     display: block;
    //     background-color: ${oc.gray[5]};
    //     height: 2px;
    //     width: 60%;
    // }
`

const ChatForm = ({child}) => {
    return (
        <Style>
            {child}
        </Style>
    );
};

export default ChatForm;