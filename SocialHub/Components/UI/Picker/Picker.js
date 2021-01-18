import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Picker.styles';
import { COLORS } from '../../../Constants/AppConstants';




const Picker = props => {

    let chooseFilefromGallery = props.selectGallery ? props.selectGallery : undefined
    let captureImage = props.selectCamera ? props.selectCamera : undefined
    let selectAudio = props.selectAudio ? props.selectAudio : undefined;
    let selectFile = props.selectFile ? props.selectFile : undefined
    let type = props.type;
    return (
        <View>
            {
                type === 'image' || type === 'video' ?
                    <View style={styles.pickerContainer}>
                        <Text style={styles.font}>{`SELECT ${type}`}</Text>
                        <TouchableOpacity onPress={chooseFilefromGallery} style={{ ...styles.pickerBtn, marginTop: 10 }}>
                            <Text style={{ color: COLORS.white }}>Select from Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={captureImage} style={styles.pickerBtn}>
                            <Text style={{ color: COLORS.white }}>Select from Camera</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    type === 'audio' ?
                        <View style={styles.pickerContainer}>
                            <Text style={styles.font}>{`SELECT ${type}`}</Text>
                            <TouchableOpacity onPress={selectAudio} style={{ ...styles.pickerBtn, marginTop: 10 }}>
                                <Text style={{ color: COLORS.white }}>Select from DEVICE</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.pickerContainer}>
                            <Text style={styles.font}>{`SELECT ${type}`}</Text>
                            <TouchableOpacity onPress={selectFile} style={{ ...styles.pickerBtn, marginTop: 10 }}>
                                <Text style={{ color: COLORS.white }}>Select from DEVICE</Text>
                            </TouchableOpacity>
                        </View>
            }
        </View>

    )
}

export default Picker;



