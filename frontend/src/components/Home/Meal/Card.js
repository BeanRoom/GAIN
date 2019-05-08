import React from 'react';

import './Style.css';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="content">
                    <h1 className="heading">급식</h1>
                    <p className="description">뒤집어서 확인</p>
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

                </div>
                <a href="#" class="btn btn-white btn-animation-1">이전</a>
                <a href="#" class="btn btn-white btn-animation-1">다음</a>
            </div>
        );
    }
};

export default Card;