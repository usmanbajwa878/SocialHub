import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { COLORS } from '../../Constants/AppConstants';


const CarouselItem = props => {
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.image} source={props.item.image} />
            </View>
            <View style={{ ...styles.textView, ...props.style }}>
                <Text style={styles.description}>{props.item.description}</Text>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({

    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '20%',
        margin: 10,
        left: 5
    },
    iconContainer: {
        marginVertical: 10,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '90%',
        borderRadius: 10,
    },
    description: {
        color: COLORS["Blue-Violet"],
        fontSize: 15
    },
 
    text: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold'
    }


})
export default CarouselItem