import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ContainersList } from '../ContainersList';

import styles from '../../styles';

type MapScreenProps = NativeStackScreenProps<ContainersList, "Map">;

const MapContainer: React.FC<MapScreenProps> = (props) => {
    return (
        <View>
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Home')}
            >
                <View style={styles.button}>
                    <Text style={styles.textBig}>Go to Home</Text>
                </View>
            </TouchableHighlight>
        </View>

    )
}

export default MapContainer;