// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import avatarImg from 'static/avatar.png'

const Style = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    ${shadow(0)}
`

const Avatar = styled.img`
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px 10px;
`

const H3 = styled.h3`
    color: white;
    margin: 0px;
    padding-top: 15px;
`


const Profile = ({username}) => {
    return (
        <Style>
            <Avatar src={avatarImg} />
            <H3>{username}</H3>
        </Style>
    );
};

export default Profile;