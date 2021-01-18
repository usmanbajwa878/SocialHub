import React from 'react';
import Otp from '../../Components/Controlled/Otp';


const OtpScreen = props => {


    const handleBack = () => {
        props.navigation.goBack()
    }
    return (
        <Otp handleBack={handleBack} />
    )
}

export default OtpScreen;

