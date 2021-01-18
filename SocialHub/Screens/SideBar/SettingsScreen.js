import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Controlled/Header'
import Settings from '../../Components/Controlled/Settings';


const SettingsScreen = props => {

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={styles.screen}>
            <Header showTitle title="SETTINGS" toggleDrawer={toggleDrawer}  />
            <Settings />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default SettingsScreen