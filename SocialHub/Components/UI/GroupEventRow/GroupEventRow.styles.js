import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 10,
        height: 70,
        marginVertical: 8,
        flexDirection: 'row'
    },
    imageContainer: {
        width: '18%',
        height: 70,
        marginRight: 10,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    content: {
        width: '70%',
    },
    heading: {
        fontSize: 15,
        fontWeight: '700'
    },
    time: {
        fontSize: 12,
        color: 'red'
    },
    btnContainer: {
        width: '40%',
        backgroundColor: COLORS.lightGrey,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: '2%',
       
    },
    statusbtnContainer: {
        width: '40%',
        backgroundColor: COLORS["Blue-Magenta-Violet"],
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: '2%',
        flexDirection:'row'
    },
    text:{
        fontSize:13,
        color:COLORS.white
    },
    icon:{
        width:15,
        height:15,
        marginHorizontal:4
    }
    
});


export default styles;