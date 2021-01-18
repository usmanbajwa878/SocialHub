import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.WHITE
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
        flexDirection: 'row',

    },
    checkBox: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.lightWhite
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
    socialbtn: {
        marginTop: 30,
        height: 50,
        width: '80%',
        marginHorizontal: 40,
        backgroundColor: COLORS.lightWhite,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    heading: {
        fontWeight: "600",
        color: COLORS["Blue-Magenta-Violet"]
    },
    textInput: {
        height: 50,
        width: '100%',
        padding: 10,
        width: '90%'
    },
    backButton: {
        height: 30,
        width: 30,
        marginLeft: 10
    }

});

export default styles;