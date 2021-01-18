import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './AudioPlay.styles';
import TrackPlayer from 'react-native-track-player';
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import { COLORS } from '../../../Constants/AppConstants';

const AudioPlay = props => {


    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const { position, duration } = useTrackPlayerProgress(250); //update after 250ms


    const type = props.type;
    const url = props.url;
    const close = props.close;

    useEffect(() => {
        const startPlayer = async () => {
            let isInit = await trackPlayerInit(url);
            console.log(isInit)
            setIsTrackPlayerInit(isInit);
        }
        startPlayer();
    }, []);

    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration]);

    const slidingStarted = () => {
        setIsSeeking(true);
    };
    //this function is called when the user stops sliding the seekbar
    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration);
        setSliderValue(value);
        setIsSeeking(false);
    };

    //function to initialize the Track Player 
    const trackPlayerInit = async (url) => {
        console.log("URL",url)
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
            id: '1',
            url: url,
            type: 'default',
            title: 'My Title',
            album: 'My Album',
            artist: 'Rohan Bhatia',
            artwork: require('../../../Assets/Images/Icons/logo.png'),
        });
        console.log(TrackPlayer)
        return true;
    };

    const onPlay = () => {
        console.log("played",url)
        setPlaying(!playing)
        TrackPlayer.play();
    }
    const onPause = () => {
        setPlaying(!playing)
        TrackPlayer.pause();
    }

    return (
        <View style={styles.container}>

            <View style={styles.topView}>
                <TouchableOpacity style={styles.closeBtn} onPress={() => close()} >
                    <Text style={{ padding: 5, fontSize: 15, color: COLORS.WHITE, fontWeight: "700" }}>CLOSE</Text>
                </TouchableOpacity>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../../../Assets/Images/Icons/music.png')}
                />
            </View>

            <View style={styles.buttonContainer}>
                {
                    playing ?
                        <TouchableOpacity onPress={()=>onPause()} >
                            <Image source={require('../../../Assets/Images/Icons/audioPause.png')} />
                        </TouchableOpacity>
                        :
                         <TouchableOpacity onPress={()=>onPlay()} >
                         <Image source={require('../../../Assets/Images/Icons/audioPlay.png')} />
                     </TouchableOpacity>
                }
            </View>
            <Slider
                style={{ width: '90%', height: 30,marginTop:'8%' }}
                minimumValue={0}
                maximumValue={1}
                value={sliderValue}
                minimumTrackTintColor={COLORS.CTA}
                maximumTrackTintColor={COLORS.LIGHT_GREY}
                onSlidingStart={slidingStarted}
                onSlidingComplete={slidingCompleted}
            />
            <Text style={{alignItems:'center',alignSelf:'flex-end',marginTop:-2,marginHorizontal:20}} >{`${duration/60}`}</Text>


        </View>
    )
}


export default AudioPlay;