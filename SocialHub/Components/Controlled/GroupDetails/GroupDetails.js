import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './GroupDetails.styles';
import { COLORS } from '../../../Constants/AppConstants';
import GroupAbout from '../../UI/GroupAbout';
import GroupFeed from '../../UI/GroupFeed';
import GroupEvent from '../../UI/GroupEvents';
import GroupPhotos from '../../UI/GroupPhotos';

const GroupDetails = props => {

    const [content, setContent] = useState(<GroupFeed />);
    const [feedFocus, setfeedFocus] = useState(true);
    const [aboutFocus, setAboutFocus] = useState(false);
    const [eventFocus, setEventFocus] = useState(false);
    const [photosFocus, setPhotosFocus] = useState(false);

    const handleShowContent = type => {
        if (type === 'GroupFeed') {
            setContent(<GroupFeed />)
            setfeedFocus(true)
            setAboutFocus(false)
            setEventFocus(false)
            setPhotosFocus(false)
        }
        if (type === 'GroupAbout') {
            setContent(<GroupAbout />)
            setfeedFocus(false)
            setAboutFocus(true)
            setEventFocus(false)
            setPhotosFocus(false)
        }
        if (type === 'GroupEvent') {
            setContent(<GroupEvent />)
            setfeedFocus(false)
            setAboutFocus(false)
            setEventFocus(true)
            setPhotosFocus(false)
        }
        if (type === 'GroupPhotos') {
            setContent(<GroupPhotos />)
            setfeedFocus(false)
            setAboutFocus(false)
            setEventFocus(false)
            setPhotosFocus(true)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <ImageBackground resizeMode="cover" style={styles.image} source={{ uri: props.item.groupImage }} >
                    <TouchableOpacity onPress={props.handleback} style={styles.iconContainer}>
                        <Image style={styles.icon} source={require('../../../Assets/Images/Icons/leftArrow.png')} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                    <Text style={styles.groupName}>{props.item.name}</Text>
                </View>
                <View style={styles.groupDetails}>
                    <View style={styles.imageGrid}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }} style={styles.firstImage} />
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.middleImage} />
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }} style={styles.lastImage} />
                        <Text style={{ marginLeft:5,padding: 10, fontSize: 15, fontWeight: '700', color: COLORS.silver }}>{`${props.item.membersCount} Members`}</Text>
                    </View>
                    <TouchableOpacity style={styles.inviteContainer}>
                        <View style={styles.imageIconContainer}>
                            <Image style={styles.imageIcon} source={require('../../../Assets/Images/Icons/plus-white.png')} />
                        </View>
                        <Text style={{ color: COLORS.white, fontWeight: '700' }}>INVITE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true} style={{ flex: 1 }} >
                        <TouchableOpacity onPress={() => handleShowContent('GroupFeed')} style={feedFocus ? { ...styles.btnItem, ...styles.focused } : styles.btnItem}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Image source={require('../../../Assets/Images/Icons/feed.png')} />
                            </View>
                            <Text>Feed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleShowContent('GroupAbout')} style={aboutFocus ? { ...styles.btnItem, ...styles.focused } : styles.btnItem}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Image source={require('../../../Assets/Images/Icons/info.png')} />
                            </View>
                            <Text>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleShowContent('GroupEvent')} style={eventFocus ? { ...styles.btnItem, ...styles.focused } : styles.btnItem}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Image source={require('../../../Assets/Images/Icons/event.png')} />
                            </View>
                            <Text>Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleShowContent('GroupPhotos')} style={photosFocus ? { ...styles.btnItem, ...styles.focused } : styles.btnItem}>
                            <View style={{ marginHorizontal: 5 }}>
                                <Image source={require('../../../Assets/Images/Icons/image.png')} />
                            </View>
                            <Text>Photos</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                {
                    content
                }
            </View>
        </View>
    )
}

export default GroupDetails;