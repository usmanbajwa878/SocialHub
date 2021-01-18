import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Profile from '../../Components/Controlled/Profile';

const ProfileScreen = props => {
    return (
        <ScrollView style={styles.screen}>
            <Profile/>
            <View style={styles.footer}>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    footer:{
        height:200
    }
})

export default ProfileScreen;