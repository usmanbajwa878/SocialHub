import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './About.styles';
import InfoRow from '../../UI/InfoRow';
import { InfoData } from '../../../Data/InfoData';

const About = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Basic Info</Text>
            {
                InfoData.map((item) => item.HeadingType==='Basic Info' ? <InfoRow item={item} /> : null)
            }
             <Text style={styles.heading1}>Contact</Text>
            {
                InfoData.map((item) => item.HeadingType==='Contact' ? <InfoRow item={item} /> : null)
            }
             <Text style={styles.heading1}>Work</Text>
            {
                InfoData.map((item) => item.HeadingType==='Work' ? <InfoRow item={item} /> : null)
            }
             <Text style={styles.heading1}>Education</Text>
            {
                InfoData.map((item) => item.HeadingType==='Education' ? <InfoRow item={item} /> : null)
            }
           

        </View>
    )
}

export default About;