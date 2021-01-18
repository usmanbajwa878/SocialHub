import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';
import styles from './Header.styles';
import { COLORS } from '../../../Constants/AppConstants';

const Header = props => {
    return (
        <SafeAreaView style={styles.container}>
            {
                props.showBack && props.showTitle ?
                    <View style={styles.showtitleandBack}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ ...styles.imageContainerLogo,backgroundColor:COLORS.lightGrey,borderColor:COLORS.TRANSPARENT}}>
                            <Image resizeMode="center" style={styles.image} source={require('../../../Assets/Images/Icons/back.png')} />
                        </TouchableOpacity>
                        <View style={styles.titleCenter}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </View>
                    :
                    props.showTitle ?
                        <View style={styles.leftContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                        </View>
                        :
                        null
            }
            <View style={styles.leftContainer}>
                {
                    props.showlogo ?
                        <TouchableOpacity style={styles.imageContainerLogo}>
                            <Image resizeMode="contain" style={styles.image} source={require('../../../Assets/Images/Icons/logo.png')} />
                        </TouchableOpacity>
                        :
                        null
                }
            </View>
            <View style={styles.rightContainer}>
                {
                    props.showEdit ?
                        <TouchableOpacity onPress={props.handleEdit} style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../../Assets/Images/Icons/edit.png')} />
                        </TouchableOpacity>
                        :
                        null

                }
                {
                    props.showSearch ?
                        <TouchableOpacity style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../../Assets/Images/Icons/search.png')} />
                        </TouchableOpacity>
                        :
                        null
                }
                {
                    !props.hideMenu ?
                        <TouchableOpacity onPress={props.toggleDrawer} style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../../Assets/Images/Icons/menu.png')} />
                        </TouchableOpacity>
                        :
                        null
                }

            </View>

        </SafeAreaView>
    )
}

export default Header;