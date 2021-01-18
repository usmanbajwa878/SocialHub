import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    heading: {
        marginVertical: 10,
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: '800'
    },
    typeContainer: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
    },
    joinedContentContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
     

    },
    allContentContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      
    }
})
export default styles;