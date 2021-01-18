import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen:{
        flex:1,
        
    },
    containerTop:{
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%'
    },
    imageContainer:{
        height:100,
        width:100,
        borderWidth:1,
        borderRadius:50,
        overflow:'hidden',
        borderColor:COLORS.LIGHT_GREY
    },
    image:{
        width:'100%',
        height:'100%',
    },
    name:{
        fontSize:20,
        marginTop:5,
        fontWeight:'500'
    },
    message:{
        fontSize:15,
        marginTop:3,
        fontWeight:'300'
    },
    content:{
        marginHorizontal:20,
        marginTop:30,
        borderRadius:10,
        overflow:'hidden',
        
    },
    listItem:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        borderColor:COLORS.WHITE,
        overflow:'hidden',
        borderBottomColor:COLORS.silver,
    },
    listText:{
        marginLeft:10,
        fontSize:15,
        fontWeight:'300',
        borderRadius:10,
        
    },
    switch:{
        marginRight:10
    }
})

export default styles;