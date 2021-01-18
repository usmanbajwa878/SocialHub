import React, { useState, createRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { IntroData } from '../../Data/IntroData';
import { COLORS } from '../../Constants/AppConstants';
import CarouselItem from './Carouseltem';


const { width, height } = Dimensions.get('window');

const Carousel = props => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollView = createRef();
    const onScroll = event => {
        const { contentOffset } = event.nativeEvent;
        const currentInd = Math.round(contentOffset.x / width)
        if (currentIndex !== currentInd) {
            setCurrentIndex(currentInd)
        }
    }

    return (
        <View style={styles.screen}>
            <ScrollView
                ref={scrollView}
                onScroll={onScroll}
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                {IntroData.map((item, i) => (
                    <View key={i} style={{ position: 'relative' }}>
                        <CarouselItem item={item} index={i} />
                        <View style={styles.dotContainer}>
                            {Array.from({ length: IntroData.length }).map((_, index) => (
                                <View key={index} style={{ ...styles.dot, backgroundColor: currentIndex === index ? COLORS["Blue-Magenta-Violet"] : 'transparent' }} />
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    dotContainer: {
        flexDirection: 'row',
        height: 20,
        width: width,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 1

    },
    dot: {
        borderRadius: 10,
        height: 10,
        width: 10,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: COLORS.OrangeWeb

    }

})

export default Carousel;