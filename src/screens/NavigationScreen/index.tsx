import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationScreensList } from './NavigationScreensList';

import Icon from 'react-native-ionicons';
//import SplashScreen from 'react-native-splash-screen';

import InfoScreen from './screens/InfoScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator<NavigationScreensList>();

// For the icons list:
// https://ionic.io/ionicons

function NavigationScreen() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "";

                    if (route.name === 'Info') {
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
            <Tab.Screen name="Info" component={InfoScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    );
}

export default NavigationScreen;