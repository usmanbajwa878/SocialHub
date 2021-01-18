import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../Constants/AppConstants';
import styles from './CustomAlert.styles';
const success = require('../../../Assets/Images/Icons/Success.png');
const failed = require('../../../Assets/Images/Icons/error.png');

const CustomAlert = props => {

    const text = props.text;
    const isloading = props.isloading;

    return (
        <View style={styles.mainContainer}>
            {/* top View */}
            {
                isloading ?
                    <View style={styles.top}>
                        <ActivityIndicator size="large" color={COLORS.CTA} />
                    </View>
                    :
                    <View style={styles.top}>
                        <Image resizeMode="contain" style={styles.imageIcon} source={success} />
                    </View>
            }
            {/* middle view */}
            <View style={styles.middle}>
                <Text>{text}</Text>
            </View>
            {/* bot View */}
            <View style={styles.bot}>
                <TouchableOpacity onPress={props.onPress} style={styles.btn}>
                    <Text>OK</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomAlert;
