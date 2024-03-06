/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from "../reducers/authentication";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApplicationScreensList } from '../screens/ApplicationScreensList';

import AuthenticationScreen from '../screens/AuthenticationScreen';
import MainScreen from '../screens/MainScreen';

import { IAuthentication } from '../reducers/authentication';

const Stack = createNativeStackNavigator<ApplicationScreensList>();

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
    }
})

interface IGlobalState {
    authentication: IAuthentication;
}

// For the icons list:
// https://ionic.io/ionicons

function NavigationComponent() {
    const key = useSelector((state: IGlobalState) => state.authentication.key);
    const isLogged: boolean = !(key == "");

    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                {!isLogged ? (
                    <Stack.Screen name="Authentication" component={AuthenticationScreen} />
                ) : (
                    <Stack.Screen name="Main" component={MainScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationComponent;
