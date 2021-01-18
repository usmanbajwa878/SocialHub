import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    imageGrid: {
        height: 40,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    firstImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.white

    },
    middleImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: -14,
        borderWidth: 1,
        borderColor: COLORS.white
    },
    lastImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: -14,
        borderWidth: 1,
        borderColor: COLORS.white
    }
})

export default styles;