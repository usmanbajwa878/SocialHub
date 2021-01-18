import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import styles from './RowComponent.styles';





const RowComponent = props => {

    const { rowHeightAnimatedValue, removeRow, leftActionState, rightActionState } = props
    if (rightActionState) {
        Animated.timing(rowHeightAnimatedValue, {
            toValue: 0,
            duration: 4,
            useNativeDriver: false,
        }).start(() => {
            removeRow()
        })
    }
    return (
        <Animated.View style={[styles.container, {
              height: rowHeightAnimatedValue
        }]}>
            <TouchableOpacity onPress={props.handleShowChat} activeOpacity={10} style={styles.rowFront}  >
                {
                    props.item.read ?
                        <View style={{ height: 10, width: 10, backgroundColor: 'blue', marginTop: '8%', marginLeft: '1%', borderRadius: 5, borderWidth: 1, borderColor: 'blue' }}>
                        </View>
                        :
                        null
                }

                <View style={props.item.read ? { ...styles.imageContainer, marginLeft: '1%' } : { ...styles.imageContainer, marginLeft: '5%' }}>
                    <Image style={styles.image} source={{ uri: props.item.profileImage }} />
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: '600' }}>{props.item.name}</Text>
                        <Text style={{ marginTop: 10, fontSize: 12 }}>{`${props.item.time} ago`}</Text>
                    </View>
                    <View style={{ marginRight: 3, height: '50%' }}>
                        <TextInput editable={false} selectTextOnFocus={false} multiline numberOfLines={2} style={{ marginTop: 2, height: '100%', fontSize: 12, fontWeight: '600' }}>{props.item.messages}</TextInput>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    )
}


export default RowComponent;