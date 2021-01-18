import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
 
   
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width:110,
        paddingRight: 17,
        height:'100%'
    },
    backRightBtnRight: {
        backgroundColor: 'black',
        right: 0
    }
})


export default styles;