import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator, Modal } from 'react-native';
import styles from './WritePost.styles';
import { COLORS, ERROR_CODES, PLACEHOLDERS, VIDEO_OPTIONS, MESSAGES } from '../../../Constants/AppConstants';
import { requestCameraPermission, requestExternalWritePermission } from '../../../utils/PickerView';
import {
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import documentPicker from 'react-native-document-picker';
import PickedContent from '../PickedContent';
import Picker from '../../UI/Picker';
import * as postActions from '../../../Store/Actions/Post';
import { generateRandomId } from '../../../utils/Utility';
import { useDispatch, useSelector } from 'react-redux';
import CustomAlert from '../CustomAlert';


const WritePost = props => {


    const mediaType = props.contentType;
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [audio, setAudio] = useState('');
    const [file, setFile] = useState('');
    const [postText, setPostText] = useState('');
    const [loading, setLoading] = useState(false);
    const [contentUrl, setContentUrl] = useState('');
    const [status, setStatus] = useState('');
    const [showModel, setShowModel] = useState(false);





    const AlertControl = (response) => {
        if (response.didCancel) {
            return;
        } else if (response.errorCode == ERROR_CODES.CAMERA_UNAVAILABLE) {
            alert(MESSAGES.CAMERA_UNAVAILABLE);
            return;
        } else if (response.errorCode == ERROR_CODES.PERMISSION) {
            alert(MESSAGES.NOT_PERMISSIONS);
            return;
        } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
        }
    }

    const selectFile = async () => {
        try {
            const response = await documentPicker.pick({
                type: [documentPicker.types.allFiles]
            })
            setFile(response);
            setContentUrl(response);
        } catch (err) {
            if (documentPicker.isCancel(err)) {
                return;
            } else {
                console.log(err)
            }
        }
    }
    const selectAudio = async () => {
        try {
            const response = await documentPicker.pick({
                type: [documentPicker.types.audio]
            })
            setAudio(response);
            setContentUrl(response);
        } catch (error) {
            console.log(error)
        }
    }

    const captureImage = async (type) => {
        let options = {
            ...VIDEO_OPTIONS,
            mediaType: type,
        }
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                AlertControl(response)
                if (type === PLACEHOLDERS.PHOTO && !response.didCancel) {
                    setImageUrl(response)
                    setContentUrl(response);
                } else if (!response.didCancel) {
                    setVideoUrl(response);
                    setContentUrl(response);
                }
            });
        }
    };


    const chooseFilefromGallery = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            AlertControl(response)
            if (type === 'photo') {
                setImageUrl(response);
                setContentUrl(response);
            } else {
                setVideoUrl(response);
                setContentUrl(response);
            }
        });
    };




    const handlePost = async () => {
        setShowModel(true)
        setLoading(true)
        setStatus('UPLOADING CONTENT');
        try {
            await dispatch(postActions.postNewPost(postText, contentUrl, mediaType, `${generateRandomId()}`))
            setStatus('UPLOAD SUCEESFUL');
            setLoading(false);
            // Alert.alert(
            //     MESSAGES.SUCCESS,
            //     MESSAGES.POST_SUCCESS,
            //     [{ text: MESSAGES.OK, onPress: props.handleBack }]
            // )
        } catch (error) {
            console.log(error)
            Alert.alert(MESSAGES.ERROR, error["Error"], [{ text: MESSAGES.OK }])
        }
    }

    if (showModel) {
        return (
            <Modal
                visible={showModel}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.mainOuterComponent}>
                    <CustomAlert
                        onPress={()=>{
                            props.handleBack();
                            setShowModel(false);
                        }}
                        isloading={loading} 
                        text={status}
                    />
                </View>
            </Modal>
        )
    }


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.handleBack} style={styles.closeContainer}>
                    <Image resizeMode="contain" style={styles.icon} source={require('../../../Assets/Images/Icons/close.png')} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>WritePost</Text>
                </View>
                <TouchableOpacity onPress={handlePost} style={{ marginRight: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: COLORS["Persian Indigo"] }}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.userInfo}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: 'https://randomuser.me/api/portraits/men/60.jpg' }} />
                    </View>
                    <Text style={{ marginHorizontal: 10, fontSize: 16 }}>Andrew Franklin</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='WRITE SOMETHING'
                        value={postText}
                        onChangeText={(text) => setPostText(text)}
                        style={styles.input}
                        multiline={true}
                        numberOfLines={0} />
                </View>
                {
                    imageUrl ?
                        <PickedContent type="image" data={imageUrl} />
                        :
                        videoUrl ?
                            <PickedContent type="video" data={videoUrl.uri} />
                            :
                            file ?
                                <PickedContent type="document" name={file.name} data={file} />
                                :
                                audio ?
                                    <PickedContent type="audio" name={audio.name} data={audio} />
                                    :
                                    null
                }
            </View>
            {
                props.contentType === 'image' ?
                    !imageUrl
                    &&
                    <Picker
                        type={props.contentType}
                        selectGallery={() => chooseFilefromGallery('photo')}
                        selectCamera={() => captureImage('photo')}
                    />
                    :
                    props.contentType === 'video' ?
                        !videoUrl &&
                        <Picker
                            type={props.contentType}
                            selectGallery={() => chooseFilefromGallery('video')}
                            selectCamera={() => captureImage('video')}
                        />
                        :
                        props.contentType === 'document' ?
                            !file &&
                            <Picker
                                type={props.contentType}
                                selectFile={() => selectFile()}
                            />
                            :
                            props.contentType === 'audio' ?
                                !audio &&
                                <Picker
                                    type={props.contentType}
                                    selectAudio={() => selectAudio()}
                                />
                                :
                                null
            }

        </View>
    )
}

export default WritePost;