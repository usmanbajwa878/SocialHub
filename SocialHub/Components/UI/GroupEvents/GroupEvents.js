import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import GroupEventRow from '../GroupEventRow';
import styles from './GroupEvents.styles';
import { GroupEventData } from '../../../Data/GroupEventData';

const GroupEvents = props => {
    return (
        <ScrollView >
            {
                GroupEventData.map((item, index) => <GroupEventRow key={index} item={item} />)
            }
        </ScrollView>
    )
}

export default GroupEvents;