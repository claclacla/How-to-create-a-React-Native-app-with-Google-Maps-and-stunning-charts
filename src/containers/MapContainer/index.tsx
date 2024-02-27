import React from 'react';

import {
    View,
    Button,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ContainersList } from '../ContainersList';

type MapScreenProps = NativeStackScreenProps<ContainersList, "Map">;

const MapContainer: React.FC<MapScreenProps> = (props) => {
    return (
        <View>
            <Button
                title="Go to Home"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    )
}

export default MapContainer;