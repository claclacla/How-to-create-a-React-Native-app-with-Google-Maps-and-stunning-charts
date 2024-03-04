/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { ContainersList } from './src/screens/ContainersList';

import NavigationScreen from './src/screens/NavigationScreen';

const Stack = createNativeStackNavigator();

// For the icons list:
// https://ionic.io/ionicons

function App() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
