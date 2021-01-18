import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView,ActivityIndicator } from 'react-native';
import Header from '../../Components/Controlled/Header';
import Post from '../../Components/Controlled/Post';
import { postData } from '../../Data/postData';
import { COLORS } from '../../Constants/AppConstants';
import Skeleton from '../../Components/Controlled/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../../Store/Actions/Post';

const HomeScreen = props => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const postData = useSelector(state => state.post.posts);
   
    console.log("POST DATA", postData)

    const toggleDrawer = () => {
        props.navigation.toggleDrawer();
    }


    const getpostData = async () => {
        try {
            await dispatch(postActions.getAllPosts());
        } catch (error) {
            console.log(error)
        }
    }

    

    useEffect(() => {
        let timer = setTimeout(() => setLoading(null), 3000);
        getpostData();
        return () => {
           
            clearTimeout(timer)
        }
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <Header
                toggleDrawer={toggleDrawer}
                showlogo
                showSearch
            />
            {
                loading ?
                    <Skeleton />
                    :
                    postData ?
                        <ScrollView
                        >
                            {
                                postData.map((item, index) => <Post    key={index} item={item} />)
                            }
                        </ScrollView>
                        :
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                                <Text>NO POSTS YET</Text>
                        </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.lightGrey
    }
});

export default HomeScreen;