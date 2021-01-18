import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    mainContainer:{
        height:'20%',
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:4,
        borderColor:COLORS.WHITE,
        backgroundColor:COLORS.WHITE
    },
    top:{
        flex:0.5,
        width:'100%'
    },
    middle:{
        flex:0.5,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bot:{
        flex:0.5,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    imageIcon:{
        height:'100%',
        width:'100%'
    },
    btn:{
        backgroundColor:COLORS.CTA,
        width:'60%',
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:20,
        height:40,
        borderRadius:10,
        borderWidth:1,
        borderColor:COLORS.CTA
        
    }
})

export default styles;