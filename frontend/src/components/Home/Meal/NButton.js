import React from 'react';

import './nButton.css'

class NButton extends React.Component {
    render() {
        return (
            <div className="footer">
                <a href="#" class="btn btn-white btn-animation-1">이전</a>
                <a href="#" class="btn btn-white btn-animation-1">다음</a>
            </div>
        );
    };
}

export default NButton;