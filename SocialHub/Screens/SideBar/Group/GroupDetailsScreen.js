import React from 'react';
import { View, Text } from 'react-native';
import GroupDetails from '../../../Components/Controlled/GroupDetails';

const GroupDetailsScreen = props => {


    const item = props.route.params.item
    const handleback = () => {
        props.navigation.goBack();
    }
    return (
        <View style={{ flex: 1 }}>
            <GroupDetails   handleback={handleback} item={item} />
        </View>
    )
}

export default GroupDetailsScreen;