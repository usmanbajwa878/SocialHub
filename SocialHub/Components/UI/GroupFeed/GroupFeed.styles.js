import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    imageIcon: {
        width: '100%',
        height: '100%'
    },
    btnContainer: {
        marginTop: 20,
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    btnItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 130,
        height: 40,
    },
    contentTypeContainer: {
        flex: 1
    },
    textInputContainer: {
        height: 50,
        marginTop: 20,
        backgroundColor: COLORS.lightWhite,
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 15,
       
    },
    inputTypeContainer:{
        flexDirection:'row',
         marginBottom:10
    },
    imageItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 35,
        marginTop:10,
        borderRadius:10,
        backgroundColor:COLORS.lightWhite,
        marginLeft: 20,
    },
    videoItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:COLORS.lightWhite,
        width: 100,
        height: 35,
        marginTop:10,
        borderRadius:10,
        marginHorizontal: 20,
    },
    postBtn:{
        marginTop:10,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 35,
        marginLeft: 30,
        borderRadius:15,
        overflow:'hidden'
    }
})

export default styles;