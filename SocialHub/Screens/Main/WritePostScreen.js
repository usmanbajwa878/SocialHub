import React from 'react';
import { View, StyleSheet } from 'react-native';
import WritePost from '../../Components/Controlled/WritePost';


const WritePostScreen = props => {

    var contentType = props.route.params.contentType
    const handleClose = () => {
        props.navigation.goBack();
    }
    
    return (
        <View style={styles.screen}>
            <WritePost handleBack={handleClose} contentType={contentType} />
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})


export default WritePostScreen;