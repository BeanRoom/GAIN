// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Form = styled.form`
    display: flex;
    margin: 10px;
`

const StyledInput = styled.input`
`

const TextArea = styled.textarea`
    background-color: #ffffff;
    border-top: 1px solid #000000;
    border-radius: 5px;
    width: 100%;
    height: 20px;
    font-size: 1em;
    overflow-y: hidden;

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

    onSubmit = () => {
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.onSubmit();
    }

    onKeyDown = (e) => {
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <StyledInput
                    type="file"
                />
                <TextArea
                    value={this.state.msg}
                    onChange={this.handleChange}
                    onKeyDown={this.onKeyDown}
                />
            </Form>
        )
    }
}

export default InputForm;