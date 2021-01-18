import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    font: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '600'
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
});

export default styles;