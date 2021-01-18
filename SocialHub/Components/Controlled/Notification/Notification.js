import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from './Notification.styles';
import { NotificationData } from '../../../Data/Notification';
import NotificationRow from '../../UI/NotificationRow';


const Notification = props => {

    const notifications = props.notifications
    console.log("notifications",notifications)

    if(notifications.length === 0){
        return (
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>No Notifications yet</Text>
            </View>
        )
    }

    return (
        <ScrollView
            style={styles.screen}>
            <View>
                {
                    notifications.map
                        ((item, index) => <NotificationRow key={item.id} item={item} />)}
            </View>
        </ScrollView>
    )
}

export default Notification;