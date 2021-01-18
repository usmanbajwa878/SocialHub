export const NEW_POST = "NEW_POST";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const UPLOAD_MEDIA = "UPLOAD_MEDIA";
export const POST_COMMENT = "POST_COMMENT";
export const POST_LIKE = "POST_LIKE";
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '../../Constants/AppConstants';
import Storage from '@react-native-firebase/storage'
import { generateRandomId } from '../../utils/Utility';
import Post from '../../Modals/Post';


export const uploadMedia = (mediaUrl, mediaFileName) => {
    return async dispatch => {
        const reference = Storage().ref(mediaUrl.fileName);
        await reference.putFile(mediaUrl.uri);
        const url = await reference.getDownloadURL();
        dispatch({ type: UPLOAD_MEDIA, mediaUrl: url })
    }

}


export const postNewPost = (postText, mediaUrl, mediaType, mediaFileName) => {

    return async (dispatch, getState) => {
        const user = getState().auth.user;
        const reference = mediaType !== 'post' ? Storage().ref(mediaFileName) : null
        let postId = generateRandomId();
        try {
            mediaType !== 'post' ? await reference.putFile(mediaUrl.uri) : null;
            const url = mediaType !== 'post' ? await reference.getDownloadURL() : null;
            const response = await firestore().collection(COLLECTIONS.POSTS)
                .doc(`${postId}`).set({
                    text: postText,
                    postMedia: url,
                    mediaType: mediaType,
                    date: new Date().toLocaleString(),
                    mediaFileName: mediaType !== 'post' ? mediaFileName : null,
                    user: user,
                    likes: [],
                    comments: [],
                    shares: []
                })
        } catch (error) {
            throw new Error(error)
        }
        dispatch({ type: NEW_POST })
    }
}

export const getAllPosts = () => {
    let postData = [];
    return async dispatch => {
        const querySnapShot = await firestore().collection(COLLECTIONS.POSTS).get();
        querySnapShot.forEach((queryDocumentSnapShot) => {
            let data = queryDocumentSnapShot.data();
            postData.push(
                new Post(
                    queryDocumentSnapShot.id,
                    data.text,
                    data.date,
                    data.mediaFileName,
                    data.mediaType,
                    data.postMedia,
                    data.likes,
                    data.comments,
                    data.shares,
                    data.user
                )
            )
            console.log()
        })
        dispatch({ type: GET_ALL_POSTS, post: postData })
    }
}


export const postComment = (postId, comment) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        const date = new Date();
        let notificationId = generateRandomId();
        let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let postObject = {
            postId: postId,
            postComment: comment,
            time: time,
            user: user
        }
        let notificationObj = {
            notificationId: notificationId,
            postId: postId,
            text: `${user.name} has commented on your Post`,
            time: time,
            user: user,
            read:false
        }

        try {
            const response = await firestore().collection(COLLECTIONS.POSTS)
                .doc(`${postId}`).update({
                    comments: firestore.FieldValue.arrayUnion(postObject)
                });
            const notificationRef = await firestore().collection(COLLECTIONS.NOTIFICATIONS).doc(`${user.userId}`);
            notificationRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        notificationRef.update({
                            notifications: firestore.FieldValue.arrayUnion(notificationObj)
                        });
                    } else {
                        notificationRef.set({}) // create the document
                        notificationRef.update({
                            notifications: firestore.FieldValue.arrayUnion(notificationObj)
                        });
                    }
                })
        } catch (error) {
            throw new Error(error)
        }
        dispatch({ type: POST_COMMENT })
    }
}

export const postLike = (postId) => {
    return async (dispatch, getState) => {
        const user = getState().auth.user;
        let likeId = generateRandomId();
        const date = new Date();
        let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let LikeObj = {
            likeId: likeId,
            time: time,
            user: user
        }
        let notificationObj = {
            notificationId: likeId,
            postId: postId,
            text: `${user.name} has Liked  your Post`,
            time: time,
            user: user,
            read:false
        }
        try {
            const response = await firestore().collection(COLLECTIONS.POSTS)
                .doc(`${postId}`).update({
                    likes: firestore.FieldValue.arrayUnion(LikeObj)
                })
                const notificationRef = await firestore().collection(COLLECTIONS.NOTIFICATIONS).doc(`${user.userId}`);
                notificationRef.get()
                    .then((docSnapshot) => {
                        if (docSnapshot.exists) {
                            notificationRef.update({
                                notifications: firestore.FieldValue.arrayUnion(notificationObj)
                            });
                        } else {
                            notificationRef.set({}) // create the document if not exists
                            notificationRef.update({
                                notifications: firestore.FieldValue.arrayUnion(notificationObj)
                            });
                        }
                    })
        } catch (error) {
            throw new Error(error)
        }
        dispatch({ type: POST_LIKE })

    }
}