import React from 'react';
import { useDispatch } from 'react-redux';

import {
    ScrollView,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainScreensList } from '../../MainScreensList';

import { unsetKey } from '../../../../reducers/authentication';

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
            </View>
        </ScrollView>
    )
}

export default MapScreen;