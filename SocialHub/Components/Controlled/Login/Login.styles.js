import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    topView: {
        height: 80,
        marginHorizontal: 20,
        marginTop: '20%'
    },
    topText: {
        fontSize: 29,
        textAlign: 'center'
    },
    inputContainer: {
        marginTop: 80,
        height: 50,
        marginHorizontal: 20,
        backgroundColor: COLORS.PALE_GREY,
        borderWidth: 1,
        borderColor: COLORS.PALE_GREY,
        borderRadius: 10
    },
    input: {
        height: 50,
        width: '100%',
        padding: 10
    },
    PolicyView: {
        height: 30,
        marginHorizontal: 20,
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'

    },
    checkBox: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.lightGrey,
        borderWidth: 1,
        borderColor: COLORS.lightGrey,
        borderRadius: 5
    },
    policyText: {
        fontSize: 12,
        width: '90%',
        marginTop: 5,
        marginLeft: 10,
        textAlign: 'justify',
        color: COLORS.silver
    },
    confirmBtn: {
        marginTop: '14%',
        height: 50,
        marginHorizontal: 20,
        backgroundColor: COLORS["Blue-Magenta-Violet"],
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 10
    },
    forgetPasswordBtn: {
        height: 30,
        width: '100%'
    },
    loginText: {
        fontWeight: "600",
        color: COLORS["Blue-Magenta-Violet"]
    },
    signUpContainer: {
        height: 30,
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 10
    },
    signupText: {
        fontSize: 14,
        fontWeight: '800',
        color: COLORS["Persian Indigo"]
    },
    forgetPasswordText: {
        fontSize: 15,
        color: COLORS.NormalLightGrey
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    }

});


export default styles;