import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './Otp.styles';
import OtpView from '@twotalltotems/react-native-otp-input';
import { COLORS } from '../../../Constants/AppConstants';
import { useDispatch } from 'react-redux';
import * as AuthActions from '../../../Store/Actions/Auth';

const Otp = props => {

    const [code, setCode] = useState();
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();


    const handleConfirm = async () => {
        setLoading(true);
        try {
            await dispatch(AuthActions.otpAuthenticate(code));
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        props.handleBack()
    }

    return (
        <SafeAreaView style={styles.screen}>
            <TouchableOpacity onPress={props.handleBack} style={styles.header}>
                <Image source={require('../../../Assets/Images/Icons/close.png')} />
            </TouchableOpacity>
            <Text style={styles.heading}>Enter your <Text style={{ color: COLORS["Blue-Magenta-Violet"], ...styles.heading }}>OTP</Text> code</Text>
            <Text style={styles.minHeading}>You can use AJAX to call the Random User Generator API and will receive a randomly generated user in return</Text>
            <OtpView
                style={styles.otpView}
                pinCount={6}
                keyboardType="number-pad"
                autoFocusOnLoad={true}
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(codeData => {
                    setCode(codeData)
                })}
            />
            <View style={styles.content}>
                <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
                    <TouchableOpacity style={styles.btnContainer} onPress={handleConfirm}>
                        {
                            loading ?
                                <ActivityIndicator size="small" color={COLORS["Blue-Magenta-Violet"]} />
                                :
                                <Text style={{ fontSize: 14, fontWeight: '600' }}>SUBMIT</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Otp;