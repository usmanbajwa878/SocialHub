import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import styles from './Post.styles';
import PickedContent from '../PickedContent';
import Comments from '../Comments';
import * as postActions from '../../../Store/Actions/Post';
import { useDispatch } from 'react-redux';

const Post = props => {

    const item = props.item
    const isGroup = props.isGroup;
    const type = props.type ? props.type : props.item.fileType;
    console.log(props)
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [showComments, setShowComments] = useState(false);


    const showPostComment = () => {
        setShowComments(true);
    }
    const handleLiked = () => {
        setLiked(!liked);

        try {
            dispatch(postActions.postLike(item.postId))
        } catch (error) {
            Alert.alert("Error", "Commented Successfully", [{ text: 'OK', onPress: (onClose) }])
        }
    }

    if (showComments) {
        return (
            <Modal
                animationType="slide"
                visible={showComments}
            >
                <Comments postId={item.postId} comments={item.comments} onClose={() => setShowComments(false)} />
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header Post */}
            <View style={styles.headerPost}>
                <View style={styles.leftContainer}>
                    <Image style={isGroup ? styles.groupImage :  styles.image} source={{ uri: isGroup ? item.profileImg : item.user.profileImage }} />
                    <View style={styles.headerTextContainer} >
                        <Text style={styles.textName}>{isGroup ? item.username : item.user.name}</Text>
                        <Text style={styles.textDate}>{item.date}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.rightContainer}>
                    <Image style={styles.dotImage} source={require('../../../Assets/Images/Icons/dots.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text>{item.postText}</Text>
                </View>
                {/* Image Post */}
                <PickedContent
                    data={item}
                    type={type}
                    style={styles.imageContainer}
                    post={true}
                    isGroup={isGroup}
                />
            </View>

            {/* like comment share View */}
            <View style={styles.postFooter}>
                <TouchableOpacity style={styles.reactView} onPress={handleLiked} >
                    <Text>{isGroup ? null : item.likes.length}</Text>
                    {
                        liked ?
                            <Image style={styles.loveIcon} source={require('../../../Assets/Images/Icons/fillLove.png')} />
                            :
                            <Image style={styles.loveIcon} source={require('../../../Assets/Images/Icons/emptyLove.png')} />
                    }
                    <Text>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showPostComment} style={styles.reactView}>
                    <Image style={styles.commentIcon} source={require('../../../Assets/Images/Icons/comment.png')} />
                    <Text>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reactView}>
                    <Image style={styles.shareIcon} source={require('../../../Assets/Images/Icons/share.png')} />
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default Post;