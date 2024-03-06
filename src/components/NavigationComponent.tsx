import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApplicationScreensList } from '../screens/ApplicationScreensList';

import AuthenticationScreen from '../screens/AuthenticationScreen';
import MainScreen from '../screens/MainScreen';

import { IAuthentication } from '../repositories/redux/authentication';

const Stack = createNativeStackNavigator<ApplicationScreensList>();

interface IGlobalState {
    authentication: IAuthentication;
}

// For the icons list:
// https://ionic.io/ionicons

function NavigationComponent() {
    const isLogged = useSelector((state: IGlobalState) => state.authentication.isLogged);

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
