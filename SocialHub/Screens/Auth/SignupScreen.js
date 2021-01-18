import React from 'react';
import SignUp from '../../Components/Controlled/SignUp';
import * as AuthActions from '../../Store/Actions/Auth';
import { useDispatch } from 'react-redux';





const SignupScreen = props => {

    const dispatch = useDispatch();
    const handleLoginNavigate = () => props.navigation.navigate('Login')
    const handleOtpNavigate = async (phoneNumber) => {
        try {
            await dispatch(AuthActions.phoneAuthenticate(phoneNumber));
        } catch (error) {
            console.log(error);
        }
        props.navigation.navigate('Otp', { phoneNumber: phoneNumber })
    }


    return (
        <SignUp
            handleOtpNavigate={handleOtpNavigate}
            handleLoginNavigate={handleLoginNavigate}
        />
    )
}
export default SignupScreen;