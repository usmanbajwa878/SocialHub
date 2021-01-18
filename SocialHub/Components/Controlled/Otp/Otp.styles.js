import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor:COLORS.white
    },
    header: {
        width: 20,
        height: 10,
        marginTop: 10
    },
    heading: {
        height: 40,
        padding: 10,
        fontSize: 22,
        fontWeight: '600',
        marginTop: '20%',
        textAlign: 'center',
        marginHorizontal: 20
    },
    minHeading: {
        marginHorizontal: 30,
        fontSize: 12,
        color: COLORS["Persian Indigo"],
        opacity: 0.3
    },
    otpView: {
        marginTop: 20,
        marginHorizontal: 30,
        height:50,
        color:COLORS["Persian Indigo"]
    },
    otptextView: {
        width:'80%',
        height:200,
        marginHorizontal:20
    },
    btnContainer: {
        marginTop: 20,
        backgroundColor: COLORS.lightGrey,
        width: '30%',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
    //   underlineStyleBase: {
    //     width: 30,
    //     height: 45,
    //     borderWidth: 0,
    //     borderBottomWidth: 1,
    //   },
     
    //   underlineStyleHighLighted: {
    //     borderColor: "#03DAC6",
    //   },
    underlineStyleBase: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderRadius:10,
        backgroundColor:COLORS.PALE_GREY,
        borderBottomWidth: 2,
        color:COLORS["Blue-Magenta-Violet"],
        fontSize:15    
    },

    underlineStyleHighLighted: {
        borderColor: COLORS["Blue-Magenta-Violet"],
    },
})
export default styles;