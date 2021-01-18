import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    heading: {
        marginTop: 15,
        height: 30,
        width: '30%',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    icon: {
        width: 15,
        height: 15,
        marginHorizontal: 7,
        opacity: 0.2
    },
    content: {
        marginHorizontal: 20
    },
    details:{
        fontSize:13,
        color:'black',
        opacity:0.7
    }
})

export default styles;