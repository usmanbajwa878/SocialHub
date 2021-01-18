import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ActivityIndicator, Alert } from 'react-native';
import styles from './Comments.styles';
import { CommentData } from '../../../Data/CommentData';
import * as postActions from '../../../Store/Actions/Post';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../../Constants/AppConstants';

const Comments = props => {

    let onClose = props.onClose;
    let postId = props.postId;
    let comments = props.comments;
    console.log("COMMENTS", comments)
    const dispatch = useDispatch();
    const [comment, setComment] = useState();
    const [loading, setLoading] = useState(false);

    const handlePostComment = () => {
        setLoading(true);
        try {
            dispatch(postActions.postComment(postId, comment));
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
        Alert.alert("Success", "Commented Successfully", [{ text: 'OK', onPress: (onClose) }])
    }



    const renderItem = ({ item }) => {
        return (
            <View style={styles.commentContainer}>
                <View style={styles.profileImageContainer}>
                    <Image resizeMode="contain" style={styles.profileImage} width={30} height={30} source={{ uri: item.user.profileImage }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.user}>{item.user.name}</Text>
                    <Text style={styles.comment}>{item.postComment}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={{ fontSize: 10, color: COLORS.CTA }}>{item.time}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity onPress={onClose} >
                    <Image width={20} height={20} style={styles.icon} source={require('../../../Assets/Images/Icons/closeComments.png')} />
                </TouchableOpacity>
                <Text style={styles.commentText}>COMMENTS</Text>
                {
                    loading ?
                        <View>
                            <ActivityIndicator size="large" color="red" />
                        </View>
                        :
                        <TouchableOpacity onPress={handlePostComment} >
                            <Image width={20} height={20} style={styles.icon} source={require('../../../Assets/Images/Icons/doneComments.png')} />
                        </TouchableOpacity>
                }

            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    numberOfLines={0}
                    style={styles.input}
                    placeholder="Write Comment..."
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                />
            </View>
            <Text style={{ marginHorizontal: 20, marginTop: 20, fontSize: 17, fontWeight: '600' }}>All Comments</Text>
            <FlatList
                data={comments}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Comments;