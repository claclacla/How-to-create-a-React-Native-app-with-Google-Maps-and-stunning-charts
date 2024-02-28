/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ContainersList } from './src/containers/ContainersList';

import Icon from 'react-native-ionicons';

import HomeContainer from './src/containers/HomeContainer';
import MapContainer from './src/containers/MapContainer';

const Tab = createBottomTabNavigator<ContainersList>();

// For the icons list:
// https://ionic.io/ionicons

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string = "";

                        if (route.name === 'Home') {
                            iconName = focused ? 'apps' : 'apps';
                        } else if (route.name === 'Map') {
                            iconName = focused ? 'list' : 'list';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeContainer} />
                <Tab.Screen name="Map" component={MapContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
