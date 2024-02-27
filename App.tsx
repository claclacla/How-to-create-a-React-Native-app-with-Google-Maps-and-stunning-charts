/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContainersList } from './src/containers/ContainersList';

import HomeContainer from './src/containers/HomeContainer';
import MapContainer from './src/containers/MapContainer';

const Stack = createNativeStackNavigator<ContainersList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeContainer} />
                <Stack.Screen name="Map" component={MapContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;