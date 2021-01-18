import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import styles from './PickedContent.styles';
import Video from 'react-native-video';
import { COLORS } from '../../../Constants/AppConstants';
import AudioPlay from '../AudioPlay';
import FileViewer from '../OpenFile';
import { openFile } from '../../../utils/Utility'


const PickedContent = props => {


    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState('');
    const [openDoc, setOpenDoc] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentDoc, setCurrentDoc] = useState({ url: '', name: '' });
    const type = props.type;
    const data = props.data;
    const isGroup = props.isGroup ? props.isGroup : false;
    const isPost = props.post ? props.post : false;
    var source = '';
    // let source = isPost ?
    //     data.fileUrl
    //     : isPost && isGroup ?
    //         props.data.postImage :
    //         data.uri;

    const calSource = () => {
        console.log("top", source)
        if (isPost && !isGroup) {
            source = data.fileUrl
        } else if (isPost && isGroup) {

            console.log("props.data", props)
            source = props.data.postImage;
            console.log("source", source)
        } else {
            source = data.uri
        };
    }
    calSource()

    const playTrack = (trackUrl) => {
        setIsAudioPlaying(true);
        setCurrentTrack(trackUrl);
    }
    const openDocument = (fileLink, fileName) => {
        setOpenDoc(true);

        setCurrentDoc({ name: fileName, url: fileLink })
    }

    const close = () => {
        if (isAudioPlaying) {
            setIsAudioPlaying(false);
        }
        if (openDoc) {
            setOpenDoc(false)
        }

    }

    if (isAudioPlaying) {
        return (
            <Modal
                visible={isAudioPlaying}
                animationType="fade"
                transparent={true}
            >
                <View style={styles.mainOuterComponent}>
                    <AudioPlay close={() => close()} type="audio" url={currentTrack} />
                </View>
            </Modal>
        )
    }


    if (openDoc) {

        openFile(currentDoc.url, currentDoc.name).then(
            (response) => console.log(response)
        ).catch(err => {
            console.log(err)
        })
        // return (
        //     <Modal
        //         visible={openDoc}
        //         animationType="fade"
        //         transparent={true}
        //     >
        //         <View style={styles.mainOuterComponent}>
        //             <FileViewer
        //                 name='undefined'
        //                 close={() => close()}
        //                 type="document"
        //                 url={currentDoc.url}
        //                 name={currentDoc.name}
        //             />
        //         </View>
        //     </Modal>
        // )
    }


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }



    return (
        <View style={styles.container}>
            {
                type === 'image' ?
                    <View style={isPost ? props.style : styles.imageContainer}>
                        {
                            <Image
                                style={isPost ? styles.postImage : { ...styles.image, marginHorizontal: '5%', marginTop: '5%' }}
                                width={isPost ? '100%' : '90%'}
                                height={isPost ? '100%' : '80%'}
                                source={{ uri: `${source}` }}
                            />
                        }
                    </View>
                    :
                    type === 'audio' && !isPost ?
                        <View style={styles.audioContainer}>
                            <Image resizeMode="contain" style={{ width: '100%', height: '100%' }} width="30%" height="30%" source={{ uri: 'https://www.freeiconspng.com/uploads/audio-record-icon-1.png' }} />
                            <Text style={{ marginTop: 10 }}>{data.name}</Text>
                        </View>
                        :
                        type === 'audio' && isPost ?
                            <TouchableOpacity onPress={() => playTrack(data.fileUrl)} style={styles.audiopost}>
                                <Image resizeMode="contain" style={{ width: '100%', height: '100%' }} width="30%" height="30%" source={{ uri: 'https://www.freeiconspng.com/uploads/audio-record-icon-1.png' }} />
                                <Text style={{ marginTop: 10 }}>AUDIO ATTACHED</Text>
                            </TouchableOpacity>
                            :
                            type === 'video' && isPost ?
                                <Video
                                    paused={true}
                                    controls={true}
                                    resizeMode="cover"
                                    source={{ uri: source }}
                                    style={{
                                        ...props.style,
                                        backgroundColor: COLORS.BLACK
                                    }}
                                />
                                :
                                type === 'document' && isPost ?
                                    <TouchableOpacity onPress={() => openDocument(data.fileUrl)} style={styles.documentpost}>
                                        <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} width="30%" height="30%" source={{ uri: 'https://img2.pngio.com/attach-attachment-clip-document-editor-file-office-paper-icon-attach-png-512_512.png' }} />
                                        <Text style={{ marginTop: 10 }}>DOCUMENT ATTACHED</Text>
                                    </TouchableOpacity>
                                    :
                                    type === 'document' && !isPost ?
                                        <View style={styles.fileContainer}>
                                            <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} width="30%" height="30%" source={{ uri: 'https://img2.pngio.com/attach-attachment-clip-document-editor-file-office-paper-icon-attach-png-512_512.png' }} />
                                            <Text style={{ marginTop: 10 }}>{data.name}</Text>
                                        </View>
                                        :
                                        type === 'video' && !isPost ?
                                            <View style={styles.videoContainer}>
                                                <Image
                                                    style={styles.previewBackground}
                                                    width="100%"
                                                    height="100%"
                                                    source={{ uri: 'https://www.fg-a.com/wallpapers/2020-black-crystalline-peaks-image.jpg' }} />
                                                <Image resizeMode='contain' style={styles.playIcon} width="30%" height="30%" source={{ uri: 'https://www.freeiconspng.com/uploads/video-play-icon-11.png' }} />
                                            </View>
                                            :
                                            null
            }
        </View>
    )
}

export default PickedContent;