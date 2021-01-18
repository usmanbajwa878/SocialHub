import React from 'react';
import ForgetPassword from '../../Components/Controlled/ForgetPassword';

const ForgetPasswordScreen = props => {


    const handleback = () => {
        props.navigation.goBack()

    }

    return (
        <ForgetPassword
            handleBack={handleback}
        />
    )
}

export default ForgetPasswordScreen;