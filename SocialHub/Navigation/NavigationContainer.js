import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerScreenNavigator, AuthScreenNavigator } from './AppNavigator';
import { TabScreenNavigator } from './AppNavigator';
import { useSelector } from 'react-redux';
import SplashScreen from '../Screens/SplashScreen';

const AppNavigator = props => {

    const isAuth = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
    return <NavigationContainer>
        {isAuth  && <DrawerScreenNavigator />}
        {!isAuth && <AuthScreenNavigator />}
        {/* <AuthScreenNavigator /> */}
        {/* <TabScreenNavigator /> */}
        {/* <DrawerScreenNavigator /> */}
    </NavigationContainer>
}


export default AppNavigator;
