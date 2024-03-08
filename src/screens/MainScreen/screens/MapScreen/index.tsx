import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import MapView, { Marker } from 'react-native-maps';

import {
    ScrollView,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainScreensList } from '../../MainScreensList';

import { IAPILocation, getAPILocations } from '../../../../repositories/api/locations';
import { ILocalStorageLocation } from '../../../../repositories/localStorage/locations';
import { mapAPILocationToLocalStorage } from '../../../../repositories/mapAPIToLocalStorage/mapAPILocationToLocalStorage';

import { unsetLocalStorageKey } from '../../../../repositories/localStorage/authentication';

import styles from '../../../../styles';
import Section from '../InfoScreen/Components/Section';

type MapScreenProps = NativeStackScreenProps<MainScreensList, "Map">;

async function getLocalStorageLocations(): Promise<ILocalStorageLocation[]> {
    let localStorageLocations: ILocalStorageLocation[];

    let APILocations: IAPILocation[] = await getAPILocations();
    localStorageLocations = mapAPILocationToLocalStorage(APILocations);

    return localStorageLocations;
}

const MapScreen: React.FC<MapScreenProps> = (props) => {
    const dispatch = useDispatch();

    const [locations, setLocations] = useState<ILocalStorageLocation[]>([]);

    useEffect(() => {
        let localStorageLocations = getLocalStorageLocations();

        localStorageLocations.then((localStorageLocations: ILocalStorageLocation[]) => {
            setLocations(localStorageLocations);
        });
    }, []);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Section title="Button">
                    <TouchableHighlight
                        onPress={() => dispatch(unsetLocalStorageKey())}
                    >
                        <View style={styles.button}>
                            <Text style={styles.textBig}>Go to Info</Text>
                        </View>
                    </TouchableHighlight>
                </Section>
                <Section title="Map">
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            region={{
                                latitude: 41.90,
                                longitude: 12.49,
                                latitudeDelta: 10,
                                longitudeDelta: 5,
                            }}
                        >
                            {locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    coordinate={{
                                        latitude: location.latitude,
                                        longitude: location.longitude
                                    }}
                                    title={location.name}
                                />
                            ))}
                        </MapView>
                    </View>
                </Section>
            </View>
        </ScrollView>
    )
}

export default MapScreen;