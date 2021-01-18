import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:10
    },
    imageContainer:{
        width:'18%',
        height:60,
        borderRadius:5,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    textContainer:{
        marginHorizontal:10,
        width:'80%'
    },
    title:{
        fontSize:16,
        fontWeight:'400'
    },
    smallText:{
        fontSize:10,
        color:COLORS["Persian Indigo"],
        fontWeight:'bold'
    }
});
export default styles;