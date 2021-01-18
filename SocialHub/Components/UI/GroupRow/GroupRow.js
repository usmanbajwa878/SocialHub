import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './GroupRow.styles';

const GroupRow = props => {

    return (
        <TouchableOpacity onPress={()=>props.showDetails(props.item)} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.item.groupImage }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.item.name.toUpperCase()}</Text>
                <Text style={styles.smallText}>{props.item.membersCount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GroupRow;