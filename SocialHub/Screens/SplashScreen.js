import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { COLORS } from '../Constants/AppConstants';


const SplashScreen = props => {

    return (
        <View style={styles.screen}>
            <Image width={10} height={50} resizeMode="contain" source={require('../Assets/Images/Icons/logo.png')} />
            <ActivityIndicator size="large" color={COLORS.WHITE} />
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        justifyContent:"center",
        alignItems:'center'
    }
})

export default SplashScreen;