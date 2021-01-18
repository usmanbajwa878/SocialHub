/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AuthStackNavigator from './Navigation/AppNavigator';
import AppNavigator from './Navigation/NavigationContainer';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './Store/Reducers/AuthReducer';
import postReducer from './Store/Reducers/PostReducer';
import notificationReducer from './Store/Reducers/NotificationReducer';
import HomeScreen from './Screens/Main/HomeScreen';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  notification:notificationReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
)




export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
