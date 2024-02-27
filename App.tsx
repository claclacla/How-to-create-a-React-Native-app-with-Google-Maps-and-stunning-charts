/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
    TouchableHighlight,
    View,
    Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContainersList } from './src/containers/ContainersList';

import HomeContainer from './src/containers/HomeContainer';
import MapContainer from './src/containers/MapContainer';

import styles from './src/styles';

const Stack = createNativeStackNavigator<ContainersList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
                <Stack.Screen name="Home" component={HomeContainer} options={{ title: 'Home' }} />
                <Stack.Screen name="Map" component={MapContainer} options={{
                    title: 'Map',
                    headerRight: () => (
                        <TouchableHighlight>
                            <View style={styles.headerButton}>
                                <Text style={[styles.text, styles.textBold]}>Cities</Text>
                            </View>
                        </TouchableHighlight>
                    ),
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
