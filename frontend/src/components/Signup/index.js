import React, { Component } from 'react';
import { Container, Form, FormH1, FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon, FormSelect } from './SignupElement';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            gender: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            gender: "",
        })
     event.preventDefault()    
    };

    render() {
        return (
            <>
            <Container>
                <FormWrap>
                <Icon to="/">DERBY</Icon>
                <FormContent>
                <Form onSubmit={this.handleSubmit}>
                    <FormH1>User Registration</FormH1>
                    <FormLabel>FirstName :</FormLabel> 
                    <FormInput type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <FormLabel>LastName :</FormLabel> 
                    <FormInput type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <FormLabel>Password :</FormLabel> 
                    <FormInput type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <FormLabel>Gender :</FormLabel>
                    <FormSelect onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </FormSelect><br />
                    <FormButton type="submit" value="Submit" />
                </Form>
                </FormContent>
                </FormWrap>
                </Container>
            </>
            
        )
    }
};

export default SignUp;