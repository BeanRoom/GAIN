import React from 'react';

import {Content, Foot, Header, Description, } from './Style';

import './Style.css';

class Card extends React.Component {
    render() {
        return (
            <div>
                <Content>
                    <Header>급식</Header>
                    <Description>뒤집어서 확인</Description>
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