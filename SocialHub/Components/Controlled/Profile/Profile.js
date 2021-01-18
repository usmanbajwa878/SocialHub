import React, { useState } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from './Profile.styles';
import { COLORS } from '../../../Constants/AppConstants';
import About from '../../Controlled/About';
import UserImages from '../UserImages';

const Profile = props => {

    const [showAbout, setShowAbout] = useState(true);

    return (
        <View style={styles.screen}>
            {/* header view */}
            <View style={styles.header}>
                <ImageBackground resizeMode="cover" style={styles.image} source={{ uri: 'https://picsum.photos/536/354' }} >
                </ImageBackground>
            </View>
            <View style={styles.container}>
                {/* picture */}
                <View style={styles.profileImageContainer}>
                    <Image resizeMode="cover" style={styles.profileImage} source={{ uri: 'https://randomuser.me/api/portraits/men/60.jpg' }} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Andrew Franklin</Text>
                    <Text style={styles.location}>lahore Pakistan</Text>
                </View>
                <TouchableOpacity style={styles.followContainer}>
                    <ImageBackground style={styles.followImage} source={require('../../../Assets/Images/Icons/FollowBtn.jpg')}>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: '500' }}>FOLLOW</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.statsContainer}>
                    <View style={styles.statsRow}>
                        <Text style={styles.number}>1264</Text>
                        <Text style={styles.type}>Followers</Text>
                    </View>
                    <View style={styles.statsRow}>
                        <Text style={styles.number}>10</Text>
                        <Text style={styles.type}>Following</Text>
                    </View>
                    <View style={styles.statsRow}>
                        <Text style={styles.number}>9</Text>
                        <Text style={styles.type}>Spaces</Text>
                    </View>
                </View>
                <View style={styles.contentTypeContainer}>
                    <TouchableOpacity onPress={() => setShowAbout(true)} style={showAbout ? { ...styles.typeContainer, borderBottomColor: COLORS["Persian Indigo"] } : styles.typeContainer}>
                        <Image style={styles.icon} source={require('../../../Assets/Images/Icons/infoIcon.png')} />
                        <Text>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowAbout(false)} style={!showAbout ? { ...styles.typeContainer, borderBottomColor: COLORS["Persian Indigo"] } : styles.typeContainer}>
                        <Image style={styles.icon} source={require('../../../Assets/Images/Icons/imageIcon.png')} />
                        <Text>Images</Text>
                    </TouchableOpacity>
                </View>
                {
                    showAbout ?
                        <About />
                        :
                        <UserImages />
                }

            </View>

        </View>
    )
}

export default Profile;