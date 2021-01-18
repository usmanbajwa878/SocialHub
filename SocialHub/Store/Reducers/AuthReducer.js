import {
    OTP_AUTHENTICATE,
    PHONE_AUTHENTICATE,
    LOGIN,
    LOGOUT,
    SIGNUP,
    SET_DID_TRY_AUTOLOGIN,
    FORGET_PASSWORD
} from '../Actions/Auth';


const initialState = {
    token: null,
    user: null,
    phoneAuthenticated: false,
    didTryAutoLogin: false,
    phoneAuthConfirmation: null,
    otpAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PHONE_AUTHENTICATE:
            return {
                ...state,
                phoneAuthConfirmation: action.phoneAuthConfirmation
            }
        case OTP_AUTHENTICATE:
            return {
                ...state,
                token: action.refreshToken,
                otpAuthenticated: true,
                phoneAuthenticated: true
            }
        case SIGNUP:
            return {
                ...state,
                didTryAutoLogin: false
            };
        case LOGIN:
            return {
                ...state,
                didTryAutoLogin: true,
                token: action.token,
                user: action.userData
            }
        case SET_DID_TRY_AUTOLOGIN:
            return {
                ...state,
                didTryAutoLogin: true
            }
        case LOGOUT:
            return {
                ...initialState,
                didTryAutoLogin: false
            }
        default:
            return state;
    }
}