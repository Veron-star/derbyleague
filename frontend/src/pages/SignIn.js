import React from 'react';
import SignIn from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';
import "../components/Signin/SigninElement";

const SignInPage = () => {
    return (
        <>
            <ScrollToTop />
            <SignIn />
        </>
    )
};

export default SignInPage;
