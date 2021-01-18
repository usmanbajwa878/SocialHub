import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../../Constants/AppConstants';
import Carousel from '../../Components/Controlled/Carousel';
const { width, height } = Dimensions.get('window');

const IntroductionScreen = props => {


    const handleNavigate = () => {
        props.navigation.navigate('Login')
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Carousel />
            </View>
            <TouchableOpacity onPress={handleNavigate} style={styles.buttonContainer}>
                <Text style={styles.text}>GET STARTED</Text>
                <Image style={{ width: 20, height: 15, marginLeft: 5, padding: 10 }} source={require('../../Assets/Images/Icons/arrow.png')} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        height: '90%',
    },
    imageContainer: {
        height: '80%',
        width: width
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS["Blue-Magenta-Violet"],
        width: '90%',
        height: 45,
        marginHorizontal: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: '400'
    }
});


export default IntroductionScreen;