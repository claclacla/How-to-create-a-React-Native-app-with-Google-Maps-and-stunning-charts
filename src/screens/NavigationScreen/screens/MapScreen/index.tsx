import React from 'react';

import {
    ScrollView,
    View,
    Text,
} from 'react-native';

//import { NativeStackScreenProps } from '@react-navigation/native-stack';

//import { NavigationScreensList } from '../../NavigationScreensList';

import styles from '../../../../styles';
import Section from '../InfoScreen/Components/Section';

//type MapScreenProps = NativeStackScreenProps<NavigationScreensList, "Map">;

// navigation.navigate('Info')

function MapScreen() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Section title="Go to Info">
                    The Map text
                </Section>
            </View>
        </ScrollView>
    )
}

export default MapScreen;