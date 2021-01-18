import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { COLORS, MESSAGES,PLACEHOLDERS,TEXTS } from '../../../Constants/AppConstants';
import * as AuthActions from '../../../Store/Actions/Auth';
import { forgetPasswordVerification } from '../../../utils/Verification';
import styles from './ForgetPassword.styles';

const ForgetPasswordScreen = props => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        var status = forgetPasswordVerification(email, password, newPassword);
        if (status.verified) {
            try {
                setLoading(true);
                await dispatch(AuthActions.ForgetPassword(email, password, newPassword))
                Alert.alert(
                    MESSAGES.SUCCESS,
                    MESSAGES.FORGET_SUCCESSFULL,
                    [{ text: MESSAGES.OK }])

            } catch (error) {
                Alert.alert(MESSAGES.ERROR, error.message, [{ text: MESSAGES.OK }])
            }
        } else {
            Alert.alert(MESSAGES.ERROR, status.message, [{ text: MESSAGES.OK }])
        }
        setLoading(false);
    }



    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={props.handleBack}
                    style={styles.backButton}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../../Assets/Images/Icons/leftArrow.png')} />
                </TouchableOpacity>
                <View style={styles.topView}>
                    <Text style={styles.topText}>
                        <Text style={styles.heading}>
                            {TEXTS.Forget_Password}
                        </Text>
                        {TEXTS.change_Password}
                    </Text>
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 80, flexDirection: 'row' }}>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={PLACEHOLDERS.EMAIL}
                        placeholderTextColor={COLORS.silver}
                        style={styles.input}
                    />
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 15, flexDirection: 'row' }}>
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder={PLACEHOLDERS.OLD_PASSWORD}
                        placeholderTextColor={COLORS.silver}
                        style={styles.input}
                    />
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 15, flexDirection: 'row' }}>
                    <TextInput
                        value={newPassword}
                        onChangeText={(text) => setNewPassword(text)}
                        placeholder={PLACEHOLDERS.NEW_PASSWORD}
                        placeholderTextColor={COLORS.silver}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.confirmBtn}>
                    {
                        loading ?
                            <ActivityIndicator size="small" color={COLORS.white} />
                            :
                            <Text style={{ fontSize: 15, color: COLORS.white }}>{PLACEHOLDERS.SUBMIT}</Text>
                    }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default ForgetPasswordScreen;