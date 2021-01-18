import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './LikeImageGrid.styles';


const LikeImageGrid = props => {
    return (
        <View style={styles.imageGrid}>
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={styles.firstImage} />
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.middleImage} />
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.lastImage} />
            <Text style={{ marginLeft: 5, padding: 10, fontSize: 15, fontWeight: '700', color: COLORS.silver }}>{`${props.item.membersCount} Members`}</Text>
        </View>
    )
}

export default LikeImageGrid;