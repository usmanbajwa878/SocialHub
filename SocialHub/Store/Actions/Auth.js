export const PHONE_AUTHENTICATE = "PHONE_AUTHENTICATE";
export const OTP_AUTHENTICATE = "OTP_AUTHENTICATE";
export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const SET_DID_TRY_AUTOLOGIN = 'SET_DID_TRY_AUTOLOGIN';
export const LOGOUT = "LOGOUT";
export const IMAGE_UPLOAD = "IMAGE_UPLOAD";
export const FORGET_PASSWORD = 'FORGET_PASSWORD';
import Auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { MESSAGES, COLLECTIONS, ERROR_CODES } from '../../Constants/AppConstants';
import AuthUser from '../../Modals/AuthUser';


export const phoneAuthenticate = (phoneNumber) => {
    return async dispatch => {
        const response = await Auth().signInWithPhoneNumber(`+92${phoneNumber}`);
        dispatch({ type: PHONE_AUTHENTICATE, phoneAuthConfirmation: response })
    }
}

export const otpAuthenticate = (code) => {

    return async (dispatch, getState) => {
        const confirmation = getState().auth.phoneAuthConfirmation;
        const response = await confirmation.confirm(code);
        dispatch({
            type: OTP_AUTHENTICATE,
            refreshToken: response.refreshToken
        })
    }
}


export const signUp = (name, email, password, phoneNumber) => {
    return async dispatch => {
        try {
            await Auth().createUserWithEmailAndPassword(email.toLowerCase(), password);
            await firestore().collection(COLLECTIONS.USERS)
                .doc(phoneNumber).set({
                    name: name,
                    email: email.toLowerCase(),
                    password: password,
                    phoneNumber: phoneNumber,
                    profileImage:'https://firebasestorage.googleapis.com/v0/b/socialhub-cb15e.appspot.com/o/testUser.png?alt=media&token=b8530eb9-fb24-4261-89c3-959935685f90'
                });
        } catch (error) {
            if (error.code === ERROR_CODES.ACCOUNT_EXISTS) {
                throw new Error(MESSAGES.ACCOUNT_EXISTS)
            } else if (error.code === ERROR_CODES.WEAK_PASSWORD) {
                throw new Error(MESSAGES.WEAK_PASSWORD)
            }
        }
        dispatch({ type: SIGNUP })
    }
}

export const login = (email, password) => {
    let userData, token;
   
    return async dispatch => {
        try {
            await Auth().signInWithEmailAndPassword(email.toLowerCase(), password);
            await firestore().collection(COLLECTIONS.USERS)
                .where('email', '==', email.toLowerCase())
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        let Data = documentSnapshot.data();
                        userData = new AuthUser(
                            documentSnapshot.id,
                            Data.name,
                            Data.email,
                            Data.password,
                            Data.phoneNumber,
                            Data.profileImage
                        );
                    });
                });
            token = await Auth().currentUser.getIdToken();
        } catch (error) {
            console.log(error.code)
            if (error.code === ERROR_CODES.WRONG_PASSWORD) {
                throw new Error(MESSAGES.INCORRECT_PASSWORD)
            } else if (error.code === ERROR_CODES.USER_NOT_FOUND) {
                throw new Error(MESSAGES.INCORRECT_CREDENTIALS)
            }
        }
        console.log(userData)

        saveDatatoStorage(userData, token)
        dispatch({ type: LOGIN, userData: userData, token: token })
    }

}

export const ForgetPassword = (email, password, newpassword) => {
    return async dispatch => {
        try {
            console.log(password, email, newpassword)
            var credentials = await Auth.EmailAuthProvider.credential(
                email,
                password
            )
            var user = Auth().currentUser;
            await user.reauthenticateWithCredential(credentials)
            await user.updatePassword(newpassword);
        } catch (error) {
            throw new Error(error);
        }

        dispatch({ type: FORGET_PASSWORD })
    }
}


export const setDidTryAutoLogin = () => {
    return {
        type: SET_DID_TRY_AUTOLOGIN,
    }
}

export const logout = () => {

    AsyncStorage.removeItem('userData')
    return { type: LOGOUT }
}


const saveDatatoStorage = (user, token) => {
    console.log("CALLED storage")
    AsyncStorage.setItem('userData', JSON.stringify({
        user: user,
        token: token,
    }))
}


