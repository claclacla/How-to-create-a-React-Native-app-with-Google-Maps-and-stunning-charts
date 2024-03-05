import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    ScrollView,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { NavigationScreensList } from '../../NavigationScreensList';

import { IAuthentication, setKey } from '../../../../reducers/authentication';

import styles from '../../../../styles';
import Section from '../InfoScreen/Components/Section';

interface IGlobalState {
    authentication: IAuthentication;
}

type MapScreenProps = NativeStackScreenProps<NavigationScreensList, "Map">;

const MapScreen: React.FC<MapScreenProps> = (props) => {
    const key = useSelector((state: IGlobalState) => state.authentication.key);
    const dispatch = useDispatch();

    // props.navigation.navigate('Info')

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
                <Section title="Description">
                    The key: {key}
                </Section>
                <Section title="Button">
                    <TouchableHighlight
                        onPress={() => dispatch(setKey("key"))}
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