import React from 'react';
import { useDispatch } from 'react-redux';

import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

import {
    ScrollView,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainScreensList } from '../../MainScreensList';

import { unsetKey } from '../../../../repositories/redux/authentication';

import styles from '../../../../styles';
import Section from '../InfoScreen/Components/Section';

type MapScreenProps = NativeStackScreenProps<MainScreensList, "Map">;

const MapScreen: React.FC<MapScreenProps> = (props) => {
    const dispatch = useDispatch();

    // props.navigation.navigate('Info')

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Section title="Button">
                    <TouchableHighlight
                        onPress={() => dispatch(unsetKey())}
                    >
                        <View style={styles.button}>
                            <Text style={styles.textBig}>Go to Info</Text>
                        </View>
                    </TouchableHighlight>
                </Section>
                <Section title="Map">
                    <View style={mapStyles.container}>
                        <MapView
                            style={mapStyles.map}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                        </MapView>
                    </View>
                </Section>
            </View>
        </ScrollView>
    )
}

const mapStyles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;