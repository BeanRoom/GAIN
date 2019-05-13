import React from 'react';

import { Header, Container, Description, nButton } from './Style'

import Card from './CardHolder';
import NButton from './NButton';

import './Style.css'

class CardList extends React.Component {
    constructor() {
        super();
        var today = new Date(),
         date = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일 '; 
    
        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
   
        var dayWeek = new Date().getDay();
        var todayLabel = week[dayWeek];

        this.state = { 
            date: date,
            todayLabel: todayLabel
           }; 
    }

    render () {
        return (
            <>
            <Container>
                <Header>오늘의 식사</Header>
                <Description> {this.state.date} {this.state.todayLabel} </Description>
                <Card time="아침"/>
                <Card time="점심"/>
                <Card time="저녁"/>
            </Container>
            <NButton/>
            </>
        );
    };
}

export default CardList;