import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    container: {
        //flex:1,
         height: '50%',
         width: '90%',
        //justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 4,
        borderColor: COLORS.WHITE,
        backgroundColor: COLORS.WHITE
    },
    closeBtn:{
        alignSelf:'flex-start',
        justifyContent:'flex-start',
        width:'100%',
    },
    topView:{
        height:'60%',
        backgroundColor:COLORS.CTA,
        width:'100%',
        borderRadius: 10,
       
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: 'transparent',
        borderWidth: 1,
        alignSelf:'center',
        marginTop:'20%',
        justifyContent:'center',
    },
    buttonContainer: {
        //backgroundColor:'red',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems:'center',
        marginTop:'10%',
        height:20,
        width:20
    },
    button: {

    }
})

export default styles;
