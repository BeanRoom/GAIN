// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Form = styled.form`
    display: flex;
    margin: 10px;
`

const StyledInput = styled.input`
    width: 1px; 
    height: 1px;
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    // clip:rect(0,0,0,0); 
    border: 0;
`

const InputLabel = styled.label`
    background-color: #ffffff;
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    border-bottom: 1px solid #000000;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0px 10px;
`

const TextArea = styled.textarea`
    background-color: #ffffff;
    border: 1px solid #000000;
    width: 100%;
    font-size: 1em;
    overflow: visible;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 18px;
    resize: none;

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
        if(this.state.msg !== '') {
            this.props.sendMessage(this.state.msg);
        }
        this.setState({
            msg: ''
        })
    }

    onKeyDown = (e) => {
        this.setSize();
        if(e.keyCode === 13){
            this.handleSubmit(e);
            this.textarea.style.height = "18px"
        }
    }

    setSize = () => {
        console.log(this.textarea.scrollHeight)
        this.textarea.style.height = "0px";
        if(this.textarea.scrollHeight < 139){
            this.textarea.style.height = this.textarea.scrollHeight+"px"
        }else{
            this.textarea.style.height = "139px"
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <InputLabel 
                    htmlFor="file"
                    ref={ref=>{
                        this.label = ref;
                    }} 
                >+</InputLabel>
                <StyledInput
                    type="file"
                    id="file"
                />
                <TextArea
                    value={this.state.msg}
                    onChange={this.handleChange}
                    onKeyDown={this.onKeyDown}
                    ref={ref => {
                        this.textarea = ref;
                    }}
                />
            </Form>
        )
    }
}

export default InputForm;