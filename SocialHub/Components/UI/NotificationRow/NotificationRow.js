import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Notification.styles';


const NotificationRow = props => {

    console.log(props.new)

    return (
        <View style={props.new ? styles.container1 : styles.container}>
            <View style={styles.rowFront}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.item.user.profileImage }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ marginTop: 14, fontSize: 16, fontWeight: '400' }}>{`${props.item.user.name} `}<Text style={{ marginTop: 10, fontSize: 13, fontWeight: '300' }}>{props.item.message}</Text></Text>
                    <Text style={{ marginTop: 3, fontSize: 10 }}>{`${props.item.time} ago`}</Text>
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Image style={{ width: 20, height: 20 }} source={require('../../../Assets/Images/Icons/more.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default NotificationRow;