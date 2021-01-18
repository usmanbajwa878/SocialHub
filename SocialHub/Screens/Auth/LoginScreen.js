import React from 'react';
import { ROUTES } from '../../Constants/AppConstants';
import Login from '../../Components/Controlled/Login';


const LoginScreen = props => {


    const handleSignUpNavigate = () => {
        props.navigation.navigate(ROUTES.SIGN_UP)
    }
    const forgetNavigate = () => {
        props.navigation.navigate(ROUTES.FORGET_PASSWORD)
    }

    return (
        <Login
            forgetNavigate={forgetNavigate}
            handleSignUpNavigate={handleSignUpNavigate}
        />
    )
}

export default LoginScreen;