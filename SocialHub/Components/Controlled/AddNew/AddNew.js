import React from 'react';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import styles from './AddNew.styles';
import { COLORS } from '../../../Constants/AppConstants';

const AddNew = props => {
    return (
        <View style={styles.screen}>
            <View  style={{height:'60%',width:'40%'}}>
                <Image  resizeMode="cover" style={styles.backgroundImage} source={require('../../../Assets/Images/Icons/waiting.png')} />
            </View>
            <Text style={styles.capital}>UPLOAD SOMETHING</Text>
            <View style={styles.firstContainer}>
                <TouchableOpacity onPress={() => props.onPress('audio')} style={{ ...styles.imageContainer, backgroundColor: 'yellow' }}>
                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/audio.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onPress('video')} style={{ ...styles.imageContainer, backgroundColor: 'pink' }}>
                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/video.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onPress('image')} style={{ ...styles.imageContainer, backgroundColor: 'white' }}>
                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/photos.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.secondContainer}>
                <TouchableOpacity onPress={() => props.onPress('post')} style={{ ...styles.imageContainer, backgroundColor: 'orange' }}>
                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onPress('document')} style={{ ...styles.imageContainer, backgroundColor: 'grey' }}>
                    <Image style={styles.image} source={require('../../../Assets/Images/Icons/document.png')} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AddNew;