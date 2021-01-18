import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './GroupAbout.styles';
import { COLORS } from '../../../Constants/AppConstants';

const icons =
    [
        {
            iconname: 'ABOUT',
            icon: require('../../../Assets/Images/Icons/infoIcon.png'),
            details: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'
        },
        {
            iconname: 'PRIVACY',
            icon: require('../../../Assets/Images/Icons/lock.png'),
            details: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
        },
        {
            iconname: 'GENERAL GROUP',
            icon: require('../../../Assets/Images/Icons/groups.png'),
        },


    ]


const GroupRow = props => {
    return (
        <View>
            <View style={styles.heading}>
                <Image style={styles.icon} source={props.item.icon} />
                <Text style={{color:COLORS.silver,fontWeight:'500',fontSize:12}}>{props.item.iconname}</Text>
            </View>
            {
                props.item.details ?
                    <View style={styles.content}>
                        <TextInput style={styles.details} multiline editable={false} value={props.item.details} placeholder="group info" />
                    </View>
                    :
                    null
            }
        </View>
    )
}

const GroupAbout = props => {
    return (
        <View style={styles.screen}>
            {
                icons.map((item) => <GroupRow item={item} />)
            }
        </View>
    )
}

export default GroupAbout;