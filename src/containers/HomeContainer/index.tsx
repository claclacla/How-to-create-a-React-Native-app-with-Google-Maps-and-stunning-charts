import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import {
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '../../styles';

import { ContainersList } from '../ContainersList';
import Section from './Components/Section';

type HomeScreenProps = NativeStackScreenProps<ContainersList, "Home">;

const HomeContainer: React.FC<HomeScreenProps> = (props) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
        >
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Map')}
            >
                <View style={styles.button}>
                    <Text style={styles.textBig}>Go to Map</Text>
                </View>
            </TouchableHighlight>
            <View>
                <Section title="Step One">
                    Edit whenever you do want <Text style={styles.textBold}>App.tsx</Text> to change this
                    screen and then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                    <ReloadInstructions />
                </Section>
                <Section title="Debug">
                    <DebugInstructions />
                </Section>
                <Section title="Learn More">
                    Read the docs to discover what to do next:
                </Section>
            </View>
        </ScrollView>
    );
}

export default HomeContainer;