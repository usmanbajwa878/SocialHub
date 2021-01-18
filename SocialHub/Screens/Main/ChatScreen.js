import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chat from '../../Components/Controlled/Chat';
import { Data } from '../../Data/UserData';
import Header from '../../Components/Controlled/Header';

const ChatScreen = props => {

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={styles.screen}>
            <Header
                hideMenu
                showBack
                showTitle
                title="Chat"
                toggleDrawer={toggleDrawer}
                navigation={props.navigation}
            />
            <Chat />
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default ChatScreen;