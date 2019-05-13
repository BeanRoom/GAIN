import React from 'react';

import {Card, Front, Back, Meal} from './Style'

class CardHolder extends React.Component {
    render () {
        return (
            <Card>
                <Front>
                    {this.props.time}    
                </Front>
                <Back>
                    <Meal>백미밥</Meal>
                </Back>
            </Card>
        );
    }
}

export default CardHolder;