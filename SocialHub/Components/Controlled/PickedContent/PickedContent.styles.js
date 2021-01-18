import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: '60%',
        width: '100%',
        flexDirection: 'row'
    },
    audioContainer: {
        height: '40%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: COLORS.PALE_GREY,
        borderRadius: 20,
        overflow: 'hidden'
    },
    videoContainer: {
        backgroundColor: COLORS.PALE_GREY,
        height: '40%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden'

    },
    fileContainer: {
        height: '40%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: COLORS.PALE_GREY,
        borderRadius: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    playIcon: {
        position: 'absolute'
    },
    previewBackground: {

    },
    postImage: {
        width: '100%',
        height: '100%'
    },
    audiopost: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        width: '100%',
        minHeight: 100,
    },
    documentpost:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        width: '100%',
        minHeight: 100,
    },
    mainOuterComponent: {
         flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000088'
    }
    
});
export default styles;