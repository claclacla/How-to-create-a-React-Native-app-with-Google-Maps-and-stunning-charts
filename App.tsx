/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ContainersList } from './src/screens/ContainersList';

import Icon from 'react-native-ionicons';
//import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

const Tab = createBottomTabNavigator<ContainersList>();

// For the icons list:
// https://ionic.io/ionicons

function App() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

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

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
