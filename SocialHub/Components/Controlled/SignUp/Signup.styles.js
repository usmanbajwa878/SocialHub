import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';



const styles = StyleSheet.create({
    screen: {
        flex: 1
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
        marginTop: 40,
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
        height: 40,
        marginHorizontal: 20,
        marginTop: '3%',
        flexDirection: 'row'
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
    socialbtn: {
        marginTop: 30,
        height: 50,
        width: '80%',
        marginHorizontal: 40,
        backgroundColor: COLORS.lightGrey,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    hidePasswordContainer: {
        height: 20,
        width: 20,
        marginTop: 15,
        marginLeft: 5
    },
    verifyBtn: {
        height: 20,
        width: 60,
        marginTop: 15,
        marginLeft: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    signUptextheading: {
        fontWeight: "600",
        color: COLORS["Blue-Magenta-Violet"]
    },
    signupText: {
        fontSize: 15,
        color: COLORS.white
    },
    orText: {
        marginTop: 10,
        height: 30,
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 20,
        color: COLORS.NormalLightGrey
    },
    loginText: {
        fontSize: 14,
        fontWeight: '800',
        color: COLORS["Persian Indigo"]
    },
    loginContainer: {
        height: 30,
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 10
    }


});

export default styles;