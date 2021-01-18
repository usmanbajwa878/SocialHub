import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { COLORS, TEXTS, MESSAGES, PLACEHOLDERS } from '../../../Constants/AppConstants';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpVerification } from '../../../utils/Verification';
import * as AuthActions from '../../../Store/Actions/Auth';
import styles from './Signup.styles';




const SignupScreen = props => {

    const verificationState = useSelector(state => state.auth.phoneAuthenticated);
    const [check, setCheck] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPhoneVerified, setIsPhoneVerified] = useState(verificationState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (verificationState === true) {
            setIsPhoneVerified(true)
        }
    }, [verificationState])

    const handleCheck = () => setCheck(!check)
    const handleShow = () => setShowPassword(!showPassword)

    const handleSignUp = async () => {
        var status = SignUpVerification(
            firstName + lastName,
            email,
            password,
            phoneNumber,
            isPhoneVerified,
            check)
        if (status.verified) {
            setLoading(true)
            try {
                await dispatch(AuthActions.signUp(firstName + lastName, email.toUpperCase(), password, phoneNumber))
                Alert.alert(
                    MESSAGES.SUCCESS,
                    MESSAGES.SIGNUP_SUCCESSFUL,
                    [{ text: MESSAGES.OK, onPress: props.handleLoginNavigate }]
                )
            } catch (error) {
                Alert.alert(
                    MESSAGES.ERROR, error.message,
                    [{ text: MESSAGES.OK }]
                )
            }
            setLoading(false)
        }
        else {
            Alert.alert(MESSAGES.ERROR, status.message, [{ text: MESSAGES.OK }])
        }
    }

    return (
        // <SafeAreaView>
            <ScrollView style={styles.screen}>
                <KeyboardAvoidingView behavior="padding" >
                    <View style={styles.topView}>
                        <Text style={styles.topText}>
                            <Text style={styles.signUptextheading}>
                                {TEXTS.Signup}
                            </Text>
                            {TEXTS.AppMotivation}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={firstName}
                            placeholder={PLACEHOLDERS.FIRST_NAME}
                            placeholderTextColor={COLORS.silver}
                            style={styles.input}
                            onChangeText={(text) => setFirstName(text)}
                        />
                    </View>
                    <View style={{ ...styles.inputContainer, marginTop: 15 }}>
                        <TextInput
                            value={lastName}
                            placeholder={PLACEHOLDERS.LAST_NAME}
                            placeholderTextColor={COLORS.silver}
                            style={styles.input}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>
                    <View style={{ ...styles.inputContainer, marginTop: 15 }}>
                        <TextInput
                            value={email}
                            placeholder={PLACEHOLDERS.EMAIL}
                            placeholderTextColor={COLORS.silver}
                            style={styles.input}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={{ ...styles.inputContainer, marginTop: 15, flexDirection: 'row' }}>
                        <TextInput
                            value={password}
                            placeholder={PLACEHOLDERS.PASSWORD}
                            placeholderTextColor={COLORS.silver}
                            secureTextEntry={showPassword}
                            style={{ ...styles.input, width: '90%' }}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={handleShow} style={styles.hidePasswordContainer} >
                            <Image style={{ width: 20, height: 20 }}
                                source={showPassword ?
                                    require('../../../Assets/Images/Icons/HidePassword.png')
                                    :
                                    require('../../../Assets/Images/Icons/showPassword.png')
                                }
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.inputContainer, marginTop: 15, flexDirection: 'row' }}>
                        <TextInput
                            placeholder={PLACEHOLDERS.PHONE_NUMBER}
                            placeholderTextColor={COLORS.silver}
                            maxLength={11}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={phoneNumber}
                            style={[styles.input, { width: '80%' }]}
                        />
                        {
                            phoneNumber.length === 11 && !isPhoneVerified ?

                                <TouchableOpacity onPress={() => props.handleOtpNavigate(phoneNumber)} style={styles.verifyBtn} >
                                    <Text>VERIFY</Text>
                                </TouchableOpacity>
                                :
                                null
                        }
                    </View>
                    <View style={styles.PolicyView}>
                        <TouchableOpacity onPress={handleCheck} style={styles.checkBox}>
                            {
                                check ?
                                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/true.png')} />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <Text style={styles.policyText}>{TEXTS.loginPolicy}</Text>
                    </View>
                    <TouchableOpacity onPress={handleSignUp} style={styles.confirmBtn}>
                        {
                            loading ?
                                <ActivityIndicator size="small" color={COLORS.white} />
                                :
                                <Text style={styles.signupText}>SIGN UP</Text>
                        }
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text>{TEXTS.AlreadyAccount}</Text>
                        <TouchableOpacity style={{ height: 30 }} onPress={props.handleLoginNavigate}>
                            <Text style={styles.loginText}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.orText}>or</Text>
                    <TouchableOpacity style={styles.socialbtn}>
                        <View style={{ width: 30, height: 30, marginHorizontal: 10 }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../../Assets/Images/Icons/google.png')} />
                        </View>
                        <Text style={{ height: 20, fontSize: 15 }}>{TEXTS.GoogleSignIn}</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        // {/* </SafeAreaView> */}
    )
}

export default SignupScreen;