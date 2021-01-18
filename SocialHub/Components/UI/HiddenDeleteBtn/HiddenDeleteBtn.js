import React from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './HiddenDeleteBtn.styles';

const HiddenDeleteBtn = props => {
    const { swipeAnimatedValue, onClose, onDelete, leftActionActivated, rightActionActivated, rowActionAnimatedValue, rowHeightAnimatedValue, showbtn } = props;

    if (rightActionActivated) {
        Animated.spring(rowActionAnimatedValue, {
            toValue: 500,
            useNativeDriver: false
        }).start()
    } else {
        Animated.spring(rowActionAnimatedValue, {
            toValue: 75,
            useNativeDriver: false
        }).start();
    }


        return (
            <Animated.View style={[styles.rowBack, { height: rowHeightAnimatedValue }]}>
                <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight, {
                    flex: 1,
                    width: rowActionAnimatedValue
                }]}>
                    <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                        <Text style={{ color: 'white' }}>DELETE</Text>
                    </View>
                </Animated.View>
            </Animated.View>
        )
    

}

export default HiddenDeleteBtn;