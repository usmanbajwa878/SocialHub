import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    screen: {
        flex: 1,

    },
    header: {
        marginTop: 40,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.silver
    },
    closeContainer: {
        height: 30,
        width: 30,
        marginLeft: 10
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
    },
    userInfo: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        marginLeft: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    input: {
        marginHorizontal: 20
    },
    pickerContainer: {
        height: 150,
        backgroundColor: COLORS.silver,

    },
    pickerBtn: {
        height: 40,
        backgroundColor: COLORS.Regalia,
        marginVertical: 5,
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    closePickerBtn: {
        height: 40,
        backgroundColor: COLORS.Regalia,
        marginVertical: 5,
        marginHorizontal: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        borderRadius: 5,
    },
    contentImageContainer: {
        marginTop: 20,
        width: '90%',
        height: 300,
        marginHorizontal: 20
    },
    mainOuterComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000088'
    }
})

export default styles;