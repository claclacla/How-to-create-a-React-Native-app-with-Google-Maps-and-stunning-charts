import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NavigationScreensList } from '../../NavigationScreensList';

import styles from '../../../../styles';

type MapScreenProps = NativeStackScreenProps<NavigationScreensList, "Map">;

const MapScreen: React.FC<MapScreenProps> = (props) => {
    return (
        <View>
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Info')}
            >
                <View style={styles.button}>
                    <Text style={styles.textBig}>Go to Info</Text>
                </View>
            </TouchableHighlight>
        </View>

    )
}

export default MapScreen;