import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: 'rgba(52, 52, 52, 0.4)',
        backgroundColor:COLORS.LIGHT_GREY,
        alignItems: 'center',
        justifyContent: 'flex-end',
        
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    backgroundImage:{
        width:'100%',
        height:'100%'
    },
    capital:{
        fontSize:20,
        fontWeight:'600',
        color:COLORS['Blue-Magenta-Violet'],
        marginBottom:40
    },
    image: {
        width: '40%',
        height: '40%'
    },
    firstContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    secondContainer: {
        flexDirection: 'row',
        marginHorizontal: 80,
        marginBottom: 20
    }
})

export default styles;