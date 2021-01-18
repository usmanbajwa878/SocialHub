import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
        height: 35,
    },
    imageContainer: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: COLORS.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: '70%'
    },
    textContainer: {
        marginHorizontal: 10
    },
    mainText: {
        fontSize: 15,
        fontWeight: '700'
    },
    smallText: {
        fontSize: 10
    }
})
export default styles;