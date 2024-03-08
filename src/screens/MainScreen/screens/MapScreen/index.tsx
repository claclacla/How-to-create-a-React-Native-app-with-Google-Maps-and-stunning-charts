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

import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLine } from 'victory-native';

import { MainScreensList } from '../../MainScreensList';

import { IAPILocation, getAPILocations } from '../../../../repositories/api/locations';
import { ILocalStorageLocation } from '../../../../repositories/localStorage/locations';
import { mapAPILocationToLocalStorage } from '../../../../repositories/mapAPIToLocalStorage/mapAPILocationToLocalStorage';

import { unsetLocalStorageKey } from '../../../../repositories/localStorage/authentication';

import styles from '../../../../styles';
import Section from '../InfoScreen/Components/Section';

type MapScreenProps = NativeStackScreenProps<MainScreensList, "Map">;

const mainData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

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
                <Section title="Vertical chart">
                    <View>
                        <VictoryChart width={350} theme={VictoryTheme.material}>
                            <VictoryBar data={mainData} x="quarter" y="earnings" />
                        </VictoryChart>
                    </View>
                </Section>
                <Section title="Pie">
                    <View>
                        <VictoryPie
                            data={[
                                { x: "Cats", y: 35 },
                                { x: "Dogs", y: 40 },
                                { x: "Birds", y: 55 }
                            ]}
                        />
                    </View>
                </Section>
                <Section title="Horizontal chart">
                    <View>
                        <VictoryChart horizontal width={350} theme={VictoryTheme.material}>
                            <VictoryBar data={mainData} x="quarter" y="earnings" />
                        </VictoryChart>
                    </View>
                </Section>
                <Section title="Line chart">
                    <View>
                        <VictoryChart>
                            <VictoryLine
                                data={[
                                    { x: 1, y: 2 },
                                    { x: 2, y: 3 },
                                    { x: 3, y: 5 },
                                    { x: 4, y: 4 },
                                    { x: 5, y: 6 }
                                ]}
                            />
                        </VictoryChart>
                    </View>
                </Section>
            </View>
        </ScrollView>
    )
}

export default MapScreen;