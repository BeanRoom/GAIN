// @flow
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
`

const StyledInput = styled.input`
    background-color: #ffffff;
    border-top: 1px solid #000000;
    width: 100%;
    height: 20px;
    font-size: 1em;
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

    handleSubmit = () => {
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        })
    }

    render() {
        return (
            <Form action="#" onSubmit={this.handleSubmit}>
                <StyledInput
                    value={this.state.msg}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
            </Form>
        )
    }
}

export default InputForm;