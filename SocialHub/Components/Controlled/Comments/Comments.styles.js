import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: '15%',
        borderTopWidth: 1,
        borderTopColor: COLORS.WHITE,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        backgroundColor: COLORS.PALE_GREY
    },
    topView: {
        marginTop: '2%',
        marginHorizontal: '7%',
        height: 40,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    icon: {
        width: 30,
        height: 30
    },
    commentText: {
        fontSize: 18,
        alignSelf: 'center',
        justifyContent: "center",
        fontWeight:'700'
    },
    inputContainer: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 10,
        marginTop: 20
    },
    input: {
        width: '95%',
        marginHorizontal: 10,
        marginTop: 5
    },
    commentContainer:{
        marginHorizontal:20,
        flexDirection:'row',
        backgroundColor: COLORS.lightWhite,
        borderRadius:5,
        marginVertical:2,
        minHeight:60,
    },
    profileImageContainer:{
        height:30,
        width:'8%',
        marginHorizontal:5,
        overflow:'hidden',
        borderWidth:1,
        borderRadius:15,
        borderColor:'transparent'
    },
    profileImage:{
        overflow:'hidden'
    },
    user:{
        fontSize:15,
        fontWeight:'400'
    },
    textContainer:{
        marginTop:2,
        width:'76%',
    },
    comment:{
        fontSize:14,
        fontWeight:'300'
    },
    dateContainer:{
        width:'14%',
        
        // alignItems:"center"
    }
})


export default styles;

