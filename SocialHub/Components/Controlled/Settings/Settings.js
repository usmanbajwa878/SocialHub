import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Switch } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';
import styles from './Settings.styles';


const Settings = props => {

    const [notification, setNotification] = useState(false);
    const [location, setLocation] = useState(false);

    return (
        <View style={styles.screen}>
            <View style={styles.containerTop}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/60.jpg' }} />
                </View>
                <Text style={styles.name}>Kim Bloggs</Text>
                <Text style={styles.message}>Your Friends can find you by name or email</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.listItem}>
                    <Text style={styles.listText}>Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: COLORS['Blue-Magenta-Violet'] }}
                        value={notification} onValueChange={() => setNotification(!notification)} style={styles.switch} />
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.listText}>Location</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: COLORS['Blue-Magenta-Violet'] }}
                        value={location} onValueChange={() => setLocation(!location)} style={styles.switch} />
                </View>
            </View>

        </View>
    )
}



export default Settings;