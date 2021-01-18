import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Group.styles';
import GroupRow from '../../UI/GroupRow';
import { GroupData } from '../../../Data/GroupData';
import { COLORS } from '../../../Constants/AppConstants';

const Group = props => {

    const [showjoined, setShowJoined] = useState(true);

    const toggleShow = () => {
        setShowJoined(!showjoined);
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Spaces</Text>
            <View style={styles.typeContainer}>
                <TouchableOpacity onPress={toggleShow} style={showjoined ? {
                    ...styles.joinedContentContainer, borderBottomWidth: 1,
                    borderBottomColor: COLORS["Blue-Magenta-Violet"]
                } : styles.joinedContentContainer}>
                    <Text style={{ fontSize: 15 }}>JOINED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleShow} style={!showjoined ? {
                    ...styles.allContentContainer, borderBottomWidth: 1,
                    borderBottomColor: COLORS["Blue-Magenta-Violet"]
                } : styles.allContentContainer}>
                    <Text style={{ fontSize: 15 }}>ALL</Text>
                </TouchableOpacity>
            </View>
            {
                showjoined ?
                    <ScrollView>
                        {
                            GroupData.map((item) => item.isJoined==="true" ? <GroupRow showDetails={()=>props.handleNavigate(item)} item={item} isGroup key={item.id} /> : null)
                        }
                    </ScrollView>
                    :
                    <ScrollView>
                        {
                            GroupData.map((item, index) => <GroupRow showDetails={()=>props.handleNavigate(item)} isGroup item={item} key={index} /> )
                        }
                    </ScrollView>
            }


        </View>

    )
};

export default Group;