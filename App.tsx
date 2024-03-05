/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from "./src/reducers/authentication";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApplicationScreensList } from './src/screens/ApplicationScreensList';

import AuthenticationScreen from './src/screens/AuthenticationScreen';
import NavigationScreen from './src/screens/NavigationScreen';

const Stack = createNativeStackNavigator<ApplicationScreensList>();

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
    }
})

// For the icons list:
// https://ionic.io/ionicons

function App() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <Provider store={ store }>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false, }}>
                    <Stack.Screen name="Authentication" component={AuthenticationScreen} />
                    <Stack.Screen name="Navigation" component={NavigationScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
