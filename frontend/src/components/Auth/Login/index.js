import React from 'react';
import { FormButton, FormContent, FormInput, FormLabel, FormWrap, Container, Icon, Form, FormH1, Text } from './LoginElement'

function Login() {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">DERBY</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In To Your Account</FormH1>
                            <FormLabel htmlFor="for">EMAIL</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">PASSWORD</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">CONTINUE</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>    
            </FormWrap>
        </Container>
            
        </>
    )
}

export default Login;
