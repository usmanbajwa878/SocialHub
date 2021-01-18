import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import AddNew from '../../Components/Controlled/AddNew';
import Header from '../../Components/Controlled/Header';

const NewPostScreen = props => {

    const handlePress = (contentType) => {
        console.log('inside New post screen',contentType)
        props.navigation.navigate('WritePost',{contentType:contentType});
    }
    const toggleDrawer = ()=>{
        props.navigation.toggleDrawer();
    }
    return (
        <View style={styles.screen} >
            {/* <Header toggleDrawer={toggleDrawer} /> */}
            <AddNew onPress={(contentType)=>handlePress(contentType)} />
        </View >

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default NewPostScreen;