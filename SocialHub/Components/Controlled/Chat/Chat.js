import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, KeyboardAvoidingView } from 'react-native';
import styles from './Chat.styles';
import { ChatData } from '../../../Data/ChatData';
import { COLORS } from '../../../Constants/AppConstants';


const Chat = props => {

    const renderItem = (item) => {
        return (
            item.item.sender ?
                <View style={styles.leftContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image resizeMode="contain" style={styles.profileImageContainer} source={{uri:item.item.profileImage}} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ color: COLORS.CTA,fontSize:15,fontWeight:'500' }}>{item.item.name}</Text>
                        <Text style={{ color: COLORS.CTA }}>{item.item.message}</Text>
                    </View>
                </View>
                :
                <View style={styles.rightContainer}>
                    <View style={styles.righttextContainer}>
                        <Text style={{ color: 'white',fontSize:15,fontWeight:'500' }}>{item.item.name}</Text>
                        <Text style={{ color: 'white' }}>{item.item.message}</Text>
                    </View>
                    <View style={styles.rightprofileImageContainer}>
                    <Image resizeMode="contain" style={styles.profileImageContainer} source={{uri:item.item.profileImage}} />
                    </View>

                </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={ChatData}
                    renderItem={renderItem}
                />
            </View>
            <KeyboardAvoidingView KeyboardAvoidingView behavior="padding"  keyboardVerticalOffset={150}  style={styles.bottomView}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Image source={require('../../../Assets/Images/Icons/plus-send.png')} />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput placeholderTextColor={COLORS.CTA} style={styles.input} placeholder="Write a Message..." />
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Image source={require('../../../Assets/Images/Icons/send.png')} />
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}

export default Chat;