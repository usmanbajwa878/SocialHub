import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './GroupEventRow.styles';

// constructor(id, eventName, eventTime, eventImage, status)
const GroupEventRow = props => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: props.item.eventImage }} />
            </View>
            <View style={styles.content}>
                <Text style={styles.heading}>{props.item.eventName}</Text>
                <Text style={styles.time}>{props.item.eventTime}</Text>
                {
                    props.item.status ?
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.text}>GOING</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.statusbtnContainer}>
                            <Image style={styles.icon} source={require('../../../Assets/Images/Icons/tick.png')} />
                            <Text style={styles.text}>GOING</Text>
                        </TouchableOpacity>
                }

            </View>
        </View>
    )
}
export default GroupEventRow;