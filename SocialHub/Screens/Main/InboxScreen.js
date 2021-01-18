import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Inbox from '../../Components/Controlled/Inbox';
import { Data } from '../../Data/UserData';
import Header from '../../Components/Controlled/Header';

const InboxScreen = props => {

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }
    return (
        <View style={styles.screen}>
            <Header
                showEdit
                toggleDrawer={toggleDrawer}
                showlogo
            />
            <Inbox
            navigation={props.navigation}
                Data={Data}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InboxScreen;