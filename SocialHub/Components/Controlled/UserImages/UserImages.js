import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './UserImages.styles';
import { postData } from '../../../Data/postData';

const UserImages = props => {


    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.postImage }} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                style={styles.list}
                numColumns={3}
                data={postData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default UserImages;