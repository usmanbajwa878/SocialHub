import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    container: {
        minHeight:150,
        backgroundColor: COLORS.lightWhite,
        marginBottom:5
    },
    headerPost: {
        marginHorizontal: 5,
        height: 60,
        flexDirection: 'row',
    },
    leftContainer: {
        width: '90%',
        flexDirection: 'row',
    },
    rightContainer: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextContainer: {
        marginLeft:8,
        width: '80%',
        justifyContent: 'center'
    },
    textName: {
        fontSize: 14,
        fontWeight:'400'
    },
    textDate: {
        fontSize: 10
    },
    groupImage: {
        marginTop: 15,
        marginLeft:10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'transparent'
    },
    image: {
        marginTop: 15,
        marginLeft:10,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'transparent'
    },
    dotImage: {
        margin: 5,
        width: 20,
        height: 20,
    },
    contentContainer:{
        width:'100%',
        minHeight:50,
        marginBottom:2
    },
    imageContainer:{
         flex:1,
         width:'100%',
         minHeight:200,
    },
    textContainer:{
        minHeight:20,
    },
    postFooter:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-around',
        borderTopWidth:1,
        borderTopColor:COLORS.LIGHT_GREY,
        marginHorizontal:5
    },
    loveIcon:{
        margin:5,
        width:20,
        height:20
    },
    commentIcon:{
        margin:5,
        width:15,
        height:15
    },
    shareIcon:{
        margin:5,
        width:15,
        height:15
    },
    reactView:{
        marginRight:10,
        width:'33%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    postImage:{
        height:'100%',
        width:'100%',
    }

})

export default styles;