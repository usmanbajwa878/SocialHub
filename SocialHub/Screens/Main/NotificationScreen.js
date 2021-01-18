import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Notification from '../../Components/Controlled/Notification';
import Header from '../../Components/Controlled/Header';
import { useSelector, useDispatch } from 'react-redux';
import * as notificationActions from '../../Store/Actions/Notifications'

const NotificationScreen = props => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const notifications = useSelector(state => state.notification.notifications)

    const handleGetNotifications = () => {
        setLoading(true)
        try {
            dispatch(notificationActions.getNotifications());
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (props.navigation.isFocused()) {
            handleGetNotifications()
        }

    }, [dispatch]);


    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }




    return (
        <View style={styles.screen}>
            <Header showTitle title="Notifications" toggleDrawer={toggleDrawer} />
            {
                !loading ?
                    <Notification notifications={notifications} />
                    :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="red" />
                    </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,

    }
})

export default NotificationScreen;