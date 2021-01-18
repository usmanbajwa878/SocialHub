import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import { useDispatch } from 'react-redux';
import { loginVerification } from '../../../utils/Verification';
import { COLORS, TEXTS, MESSAGES, PLACEHOLDERS } from '../../../Constants/AppConstants';
import * as AuthActions from '../../../Store/Actions/Auth';
import styles from './Login.styles';



const LoginScreen = props => {

    const [check, setCheck] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleCheck = () => {
        setCheck(!check)
    }
    const handleShow = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = async () => {
        var status = loginVerification(email, password);
        if (status.verified) {
            setLoading(true)
            try {
                await dispatch(AuthActions.login(email, password))
            } catch (error) {
                Alert.alert(MESSAGES.ERROR, error.message, [{ text: MESSAGES.OK }])
            }
            setLoading(false)
        }
        else {
            Alert.alert(MESSAGES.ERROR, status.message, [{ text: MESSAGES.OK }])
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <View style={styles.topView}>
                    <Text style={styles.topText}>
                        <Text style={styles.loginText}>
                            {TEXTS.Login}
                        </Text>
                        {TEXTS.AppMotivation}
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput value={email}
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
                        placeholder={PLACEHOLDERS.PASSWORD}
                        secureTextEntry={showPassword}
                        placeholderTextColor={COLORS.silver}
                        style={[styles.input, { width: '90%' }]}
                    />
                    <TouchableOpacity
                        onPress={handleShow}
                        style={{ height: 20, width: 20, marginTop: 15, marginLeft: 5 }
                        } >
                        <Image style={{ width: 20, height: 20 }}
                            source={showPassword ?
                                require('../../../Assets/Images/Icons/HidePassword.png')
                                :
                                require('../../../Assets/Images/Icons/showPassword.png')
                            }
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.PolicyView}>
                    <View style={{ flexDirection: 'row', width: '60%' }}>
                        <TouchableOpacity onPress={handleCheck} style={styles.checkBox}>
                            {
                                check ?
                                    <Image style={styles.imageStyle}
                                        source={require('../../../Assets/Images/Icons/true.png')}
                                    />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <Text style={styles.policyText}>{TEXTS.keepLoggedIn}</Text>
                    </View>
                    <View style={{ width: '40%', marginLeft: 30 }}>
                        <TouchableOpacity style={styles.forgetPasswordBtn} onPress={props.forgetNavigate}>
                            <Text style={styles.forgetPasswordText}>ForgetPassword?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={handleLogin} style={styles.confirmBtn}>
                    {
                        loading ?
                            <ActivityIndicator size="small" color={COLORS.white} />
                            :
                            <Text style={{ fontSize: 15, color: COLORS.white }}>SIGN IN</Text>
                    }
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text>{TEXTS.NoAccount}</Text>
                    <TouchableOpacity style={{ height: 30 }} onPress={props.handleSignUpNavigate} >
                        <Text style={styles.signupText}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;