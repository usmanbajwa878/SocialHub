import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import styles from './Skeleton.styles';
import Svg, { Circle, Rect } from 'react-native-svg'

const Skeleton = props => {
    return (
        <ScrollView>
            <SvgAnimatedLinearGradient height={200} width={400} >
                <Circle cx="30" cy="30" r="30" />
                <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
            </SvgAnimatedLinearGradient>
            <SvgAnimatedLinearGradient height={200} width={400}>
                <Circle cx="30" cy="30" r="30" />
                <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
            </SvgAnimatedLinearGradient>
            <SvgAnimatedLinearGradient height={200} width={400}>
                <Circle cx="30" cy="30" r="30" />
                <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
            </SvgAnimatedLinearGradient>
            <SvgAnimatedLinearGradient height={200} width={400}>
                <Circle cx="30" cy="30" r="30" />
                <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
            </SvgAnimatedLinearGradient>
        </ScrollView>
    )
}

export default Skeleton;