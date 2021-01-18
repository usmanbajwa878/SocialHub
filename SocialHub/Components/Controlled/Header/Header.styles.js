import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.smokeWhite,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey
    },
    rightContainer: {

        flexDirection: 'row'
    },
    showtitleandBack: {
        flexDirection: 'row',
        width: '100%'
    },
    imageContainer: {
        margin: 10,
        height: 25,
        width: 25,
    },
    imageContainerLogo: {
        marginLeft: 10,
        height: 40,
        width: 40,
        borderRadius: 25,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: COLORS.white
    },
    image: {
        color: COLORS["Blue-Magenta-Violet"],
        width: '100%',
        height: '100%',

    },
    titleCenter: {
        justifyContent: 'center',
        width: '80%',
        alignItems: 'center'

    },
    titleContainer: {
        marginHorizontal: 10
    },
    title: {
        fontSize: 25,
        fontWeight: '500'
    }

});

export default styles;