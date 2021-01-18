import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
import styles from './GroupFeed.styles';
import Post from '../../Controlled/Post';
import { postData } from '../../../Data/postData';
import { COLORS } from '../../../Constants/AppConstants';

const GroupFeed = props => {

    return (
        <ScrollView style={styles.contentTypeContainer}>
            <View style={styles.textInputContainer}>
                <TextInput placeholder="What in your mind" />
            </View>
            <View style={styles.inputTypeContainer}>
                <TouchableOpacity style={styles.imageItem}>
                    <View style={{ marginHorizontal: 5 }}>
                        <Image source={require('../../../Assets/Images/Icons/image.png')} />
                    </View>
                    <Text>Photos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoItem}>
                    <View style={{ marginHorizontal: 5 }}>
                        <Image source={require('../../../Assets/Images/Icons/play.png')} />
                    </View>
                    <Text>Videos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postBtn}>
                    <ImageBackground style={styles.imageIcon} source={require('../../../Assets/Images/Icons/FollowBtn.jpg')}>
                        <Text style={{ padding: 8, color: 'white', textAlign: 'center', fontWeight: '400' }}>POST</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
                {
                    postData.map((item, index) => <Post key={index}  type={'image'}  isGroup={true} item={item} />)
                }
           
        </ScrollView>

        // group posts

    )
}

export default GroupFeed;