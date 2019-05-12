import React from 'react';

import {Content, Foot, Header, Description, } from './Style';

import './Style.css';

class Card extends React.Component {
    constructor() { 
        super(); 
   
        var today = new Date(), 
         date = today.getFullYear() + '년 ' + (today.getMonth() + 1) + '월 ' + today.getDate() + '일 '; 
        
         var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    
         var today = new Date().getDay();
         var todayLabel = week[today];
     
        this.state = { 
         date: date,
         todayLabel: todayLabel
        }; 
       } 

    render() {
        return (
            <div>
                <Content>
                    <Header>오늘의 식사</Header>
                    <Description>{this.state.date} {this.state.todayLabel}</Description>
                    <a className="card" href="#!">
                        <div className="front">
                            아침
                </div>
                        <div className="back">
                            <div>
                                <p>백미밥</p>
                                <p>꼬치어묵국</p>
                                <p>깍두기</p>
                                <p>스테이크</p>
                                <p id="last">석류푸딩</p>
                                <button className="button">Like!</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="#!">
                        <div className="front">
                            점심
                </div>
                        <div className="back">
                            <div>
                                <p>백미밥</p>
                                <p>꼬치어묵국</p>
                                <p>깍두기</p>
                                <p>스테이크</p>
                                <p id="last">석류푸딩</p>
                                <button className="button">Like!</button>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="#!">
                        <div className="front">
                            저녁
                </div>
                        <div className="back">
                            <div>
                                <p>백미밥</p>
                                <p>꼬치어묵국</p>
                                <p>깍두기</p>
                                <p>스테이크</p>
                                <p id="last">석류푸딩</p>
                                <button className="button">Like!</button>
                            </div>
                        </div>
                    </a>
                    
                </Content>
                <Foot>
                <a href="#" class="btn btn-white btn-animation-1">이전</a>
                <a href="#" class="btn btn-white btn-animation-1">다음</a>
                </Foot>
            </div>
        );
    }
};

export default Card;