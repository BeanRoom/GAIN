// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from 'lib/styleUtils'

import { NavLink } from 'react-router-dom';
import Profile from 'components/Base/Header/Profile';
import DMList from './DMList';

const Wrapper = styled.div`
    background-color: ${oc.indigo[6]};
    width: 200px;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
`


class DMbar extends React.Component{
    render(){
        return(
            <Wrapper>
                <Profile child={`JHT`}/>
                <DMList />
            </Wrapper>
        )
    }
}

// TODO : Nav Link 연결, 이중 라우팅으로 채팅 구현, Redirect 컴포넌트 사용하여 Login페이지로 이동

export default DMbar;