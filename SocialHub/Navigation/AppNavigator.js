import React from 'react';
import { Image, ScrollView, View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoginScreen from '../Screens/Auth/LoginScreen';
import SignUpScreen from '../Screens/Auth/SignupScreen';
import ForgetPasswordScreen from '../Screens/Auth/ForgetPasswordScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import IntroductionScreen from '../Screens/Start/IntroductionScreen';
import HomeScreen from '../Screens/Main/HomeScreen';
import WritePostScreen from '../Screens/Main/WritePostScreen';
import NotificationScreen from '../Screens/Main/NotificationScreen';
import NewPostScreen from '../Screens/Main/NewPostScreen';
import ProfileScreen from '../Screens/Main/ProfileScreen';
import OtpScreen from '../Screens/Auth/OtpScreen';
import GroupDetailScreen from '../Screens/SideBar/Group/GroupDetailsScreen';
import GroupScreen from '../Screens/SideBar/Group/GroupScreen';
import SettingScreen from '../Screens/SideBar/SettingsScreen';
import InboxScreen from '../Screens/Main/InboxScreen';
import ChatScreen from '../Screens/Main/ChatScreen';
import { COLORS } from '../Constants/AppConstants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as authActions from '../Store/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';





const defaultNavOptions = {
    headerStyles: {
        backgroundColor: COLORS["Blue-Magenta-Violet"]
    },
    headerTintColor: COLORS["Blue-Magenta-Violet"]
}

const defaultDrawerOptions = {


    activeBackgroundColor: COLORS.white,
    activeTintColor: COLORS["Blue-Magenta-Violet"],
    inactiveBackgroundColor: COLORS.white,
    drawerBackgroundColor: COLORS.white,
    overlayColor: COLORS.white,
    contentOptions: {
        activeTintColor: COLORS.white,
    },
    hideStatusBar: true,
}

const LoginStackNavigator = createStackNavigator();

export const LoginScreenNavigator = () => {
    return (
        <LoginStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <LoginStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }} />
            <LoginStackNavigator.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }} />
        </LoginStackNavigator.Navigator>

    )
}





const SignUpStackNavigator = createStackNavigator();

export const SignUpScreenNavigator = () => {
    return (
        <SignUpStackNavigator.Navigator screenOptions={defaultNavOptions} mode="modal">
            <SignUpStackNavigator.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <SignUpStackNavigator.Screen
                name="Otp"
                component={OtpScreen}
                options={{
                    mode: 'modal',
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </SignUpStackNavigator.Navigator>
    )
}

const HomeStackNavigator = createStackNavigator();

export const HomeScreenNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}


const NotificationStackNavigator = createStackNavigator();

export const NotificationNavigator = () => {
    return (
        <NotificationStackNavigator.Navigator>
            <NotificationStackNavigator.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </NotificationStackNavigator.Navigator>
    )
}

const InboxStackNavigator = createStackNavigator();
export const InboxNavigator = () => {
    return (
        <InboxStackNavigator.Navigator>
            <InboxStackNavigator.Screen
                name="Inbox"
                component={InboxScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <InboxStackNavigator.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </InboxStackNavigator.Navigator>
    )
}

const AddNewPostStackNavigator = createStackNavigator();
export const AddNewPostNavigator = () => {
    return (
        <AddNewPostStackNavigator.Navigator mode="modal">
            <AddNewPostStackNavigator.Screen
                name="AddNewPost"
                component={NewPostScreen}
                options={{
                    mode: 'modal',
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <AddNewPostStackNavigator.Screen
                name="WritePost"
                component={WritePostScreen}
                options={{
                    mode: 'modal',
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </AddNewPostStackNavigator.Navigator>
    )
}
const ProfileStackNavigator = createStackNavigator();
export const ProfileNavigator = () => {
    return (
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </ProfileStackNavigator.Navigator>
    )
}


const AuthStackNavigator = createStackNavigator();

export const AuthScreenNavigator = () => {
    return (
        <AuthStackNavigator.Navigator initialRouteName="Introduction" screenOptions={defaultNavOptions} >
            <AuthStackNavigator.Screen
                name="Introduction"
                component={IntroductionScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <AuthStackNavigator.Screen
                name="Login"
                component={LoginScreenNavigator}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <AuthStackNavigator.Screen
                name="SignUp"
                component={SignUpScreenNavigator}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            {/* <AuthStackNavigator.Screen
                name="Home"
                component={HomeScreenNavigator}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            /> */}

        </AuthStackNavigator.Navigator>
    )
};



const GroupStackNavigator = createStackNavigator();

export const GroupNavigator = () => {

    return (
        <GroupStackNavigator.Navigator>
            <GroupStackNavigator.Screen
                name="Groups"
                component={GroupScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <GroupStackNavigator.Screen
                name="showDetails"
                component={GroupDetailScreen}
                options={{
                    headerMode: 'none',
                    headerShown: false
                }}
            />

        </GroupStackNavigator.Navigator>
    )
}





const TabNavigator = createBottomTabNavigator();
export const TabScreenNavigator = () => {
    return (
        <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let visible = false;
                    var isPlus = false;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('../Assets/Images/Icons/home-Active.png')
                            : require('../Assets/Images/Icons/home-InActive.png')
                    } else if (route.name === 'Inbox') {
                        visible = true
                        iconName = focused
                            ? require('../Assets/Images/Icons/chat-Active.png')
                            : require('../Assets/Images/Icons/chat-InActive.png')
                    } else if (route.name === 'AddNewPost') {
                        isPlus = true
                        iconName = focused
                            ? require('../Assets/Images/Icons/Add-Active.png')
                            : require('../Assets/Images/Icons/Add-InActive.png')
                    } else if (route.name === 'Notification') {
                        iconName = focused
                            ? require('../Assets/Images/Icons/notification-Active.png')
                            : require('../Assets/Images/Icons/notification-InActive.png')
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? require('../Assets/Images/Icons/user-Active.png')
                            : require('../Assets/Images/Icons/user-InActive.png')
                    }

                    // You can return any component that you like here!
                    return <Image resizeMode="contain" source={iconName} style={
                        isPlus ? {
                            width: 60, height: 60, bottom: visible ? -10 : 10, borderWidth: 2, borderColor: COLORS.WHITE, backgroundColor: COLORS.WHITE, borderRadius: 30
                        }
                            : { width: 22, height: 22 }} />

                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}

        >
            <TabNavigator.Screen
                name="Home"
                component={HomeScreenNavigator}
            />
            <TabNavigator.Screen
                name="Inbox"
                component={InboxNavigator}
                options={({ navigation }) => {
                    const { routes, index } = navigation.dangerouslyGetState();
                    const { state: messageState } = routes[index];
                    let tabBarVisible = true;
                    if (messageState) {
                        const { routes: messageRoutes, index: messageIndex } = messageState;
                        const exploreActiveRoute = messageRoutes[messageIndex];
                        if (exploreActiveRoute.name === 'Chat') {
                            tabBarVisible = false
                        };
                    }
                    return {
                        tabBarVisible,

                    };
                }}
            />
            <TabNavigator.Screen
                name="AddNewPost"
                component={AddNewPostNavigator}
            />
            <TabNavigator.Screen
                mode="modal"
                name="Notification"
                component={NotificationNavigator}
            />
            <TabNavigator.Screen
                name="Profile"
                component={ProfileNavigator}
            />
        </TabNavigator.Navigator>
    )
}


const DrawerNavigator = createDrawerNavigator();

export const DrawerScreenNavigator = () => {


const dispatch = useDispatch();

const handleLogout = () => {
        dispatch(authActions.logout())
}
    return (
        <DrawerNavigator.Navigator

            drawerStyle={{ width: '60%' }}
            drawerPosition={'right'}
            drawerType={'slide'}
            overlayColor='transparent'
            drawerContent={
                props => {
                    return (
                        <SafeAreaView style={{ flex: 1 }}>
                            <ScrollView>
                                <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.iconContainer}>
                                    <Image style={styles.icon} source={require('../Assets/Images/Icons/close-drawer.png')} />
                                </TouchableOpacity>
                                <View style={styles.listContainer}>
                                    <DrawerItemList {...props} />
                                </View>
                            </ScrollView>
                            <TouchableOpacity onPress={handleLogout} style={styles.bottomContainer}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    )
                }
            }
            drawerContentOptions={defaultDrawerOptions}

        >
            <DrawerNavigator.Screen
                name="Home"
                component={TabScreenNavigator}
                options={{
                    drawerIcon: drawerConfig => <Image width={10} height={10} source={require('../Assets/Images/Icons/home.png')} />,
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <DrawerNavigator.Screen
                name="Spaces"
                component={GroupNavigator}
                options={{
                    drawerIcon: drawerConfig => <Image width={10} height={10} source={require('../Assets/Images/Icons/groups.png')} />,
                    headerMode: 'none',
                    headerShown: false
                }}
            />
            <DrawerNavigator.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    drawerIcon: drawerConfig => <Image width={10} height={10} source={require('../Assets/Images/Icons/settings.png')} />,
                    headerMode: 'none',
                    headerShown: false
                }}
            />
        </DrawerNavigator.Navigator>
    )

}



const styles = StyleSheet.create({
    listContainer: {
        marginTop: '30%',
        marginHorizontal: 20
    },
    iconContainer: {
        alignItems: 'flex-end',
        marginHorizontal: 10,
        justifyContent: 'flex-end'
    },
    icon: {
        width: 35,
        height: 35
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 20,
        marginHorizontal: '30%',
        width: '50%',
        backgroundColor: 'red',
        marginBottom: '30%',
    }
})