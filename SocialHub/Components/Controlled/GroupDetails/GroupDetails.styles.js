import { StyleSheet } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';

const styles = StyleSheet.create({
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
        borderColor: 'white'
    },
    icon: {
        margin: 5,
        width: 18,
        height: 18,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30
    },
    nameContainer: {

        marginTop: 30,
        height: 40,
        marginHorizontal: 20
    },
    groupName: {
        fontSize: 25,
        fontWeight: '500'
    },
    groupDetails: {
        marginHorizontal: 20,
        flexDirection: 'row',
        height: 35,
        justifyContent: 'space-between',
    },
    inviteContainer: {
        backgroundColor: COLORS["Blue-Violet"],
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    imageIconContainer: {
        width: 20,
        height: 20,
        marginHorizontal: 5
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
        padding: 15
    },
    inputTypeContainer: {
        flexDirection: 'row'
    },
    imageItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 35,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightWhite,
        marginLeft: 20,
    },
    videoItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.lightWhite,
        width: 100,
        height: 35,
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    postBtn: {
        marginTop: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 35,
        marginLeft: 30,
        borderRadius: 15,
        overflow: 'hidden'
    },
    focused: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS["Blue-Magenta-Violet"]
    },
    imageGrid: {
        height: 40,
        width: '50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
    },
    firstImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth:1,
        borderColor:COLORS.white

    },
    middleImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft:-14,
        borderWidth:1,
        borderColor:COLORS.white
    },
    lastImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft:-14,
        borderWidth:1,
        borderColor:COLORS.white
    }

})

export default styles;