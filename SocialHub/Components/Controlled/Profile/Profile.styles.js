import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        height: '30%',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 25,
        borderWidth: 1,
        marginTop: 50,
        marginLeft: 20,
        overflow: 'hidden',
        backgroundColor: COLORS.smokeWhite,
        borderColor:'white'
    },
    icon: {
        margin: 5,
        width: 18,
        height: 18,
    },
    container: {
        flex: 1,
        marginTop: -18,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 1,
        borderColor: COLORS.white
    },
    profileImageContainer: {
        width: 150,
        height: 150,
        marginLeft: width / 2 - 70,
        marginTop: -50,
        borderRadius: 25,
        borderColor: 'transparent',
        overflow: 'hidden'
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    nameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        fontSize: 25,
        color: 'black'
    },
    location: {
        color: COLORS.silver
    },
    followContainer: {
        marginTop: 20,
        width: 150,
        height: 40,
        justifyContent: 'center',
        marginLeft: width / 2 - 70,
        borderRadius: 20,
        backgroundColor: 'red',
        overflow: 'hidden'
    },
    followImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 60,
        marginTop: 20
    },
    statsRow: {
        alignItems: 'center'
    },
    number: {
        fontSize: 15,
        fontWeight: '700'
    },
    type: {
        color: COLORS.silver
    },
    contentTypeContainer: {
        marginTop: 40,
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 50,
    },
    typeContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.silver
    }
})
export default styles;