// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Form = styled.form`
    display: flex;
    margin: 10px;
`

const StyledInput = styled.input`
    background-color: #ffffff;
    border-top: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
    height: 20px;
    font-size: 1em;

    &:focus{
        outline: none;
    }
`

class InputForm extends React.Component {
    state={
        msg: ''
    }

    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <StyledInput
                    value={this.state.msg}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}

export default InputForm;