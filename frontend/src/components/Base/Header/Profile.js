// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

const Style = styled.div`
    width: 100%;
    min-height: 50px;
    line-height: 50px;
    ${shadow(0)}
`

const Profile = ({child}) => {
    return (
        <Style>
            {child}
        </Style>
    );
};

export default Profile;