import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './InfoRow.styles';



const InfoRow = props => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.item.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>{props.item.title}</Text>
                <Text style={styles.smallText}>{props.item.type}</Text>
            </View>
        </View>
    )
}

export default InfoRow;