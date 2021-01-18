import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../Components/Controlled/Header'
import Group from '../../../Components/Controlled/Group';


const GroupScreen = props => {
    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }
    const handleNavigate = (item) => {
        props.navigation.navigate('showDetails', { item, item })
    }
    return (
        <View style={styles.screen}>
            <Header showlogo toggleDrawer={toggleDrawer} />
            <Group handleNavigate={handleNavigate} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default GroupScreen