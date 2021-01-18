import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    container: {
        height: 80,
        margin:0
      
    },
    container1:{
        height: 80,
        margin:0,
        backgroundColor:COLORS.lightWhite
    },
    rowFront: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        height:'100%',
        marginHorizontal:0
        
    },
    imageContainer: {
        height: '60%',
        width: '12%',
        marginLeft: '2%',
        marginVertical: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
    },
    textContainer: {
        width: '70%',
        marginVertical: 10,
        marginLeft: 4,
        marginRight: 15,
        height: '80%'
    },
    btnContainer:{
        marginTop:5,
        width:'8%',
        height:'22%',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
 
})

export default styles;