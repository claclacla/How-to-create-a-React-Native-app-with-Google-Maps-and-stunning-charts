import React from 'react';

import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    Button,
} from 'react-native';

import {
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ContainersList } from '../ContainersList';
import Section from './Components/Section';

type HomeScreenProps = NativeStackScreenProps<ContainersList, "Home">;

const HomeContainer: React.FC<HomeScreenProps> = (props) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >
            <Button
                title="Go to Map"
                onPress={() => props.navigation.navigate('Map')}
            />
            <View>
                <Section title="Step One">
                    Edit whenever you do want <Text style={styles.highlight}>App.tsx</Text> to change this
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

const styles = StyleSheet.create({
    highlight: {
        fontWeight: '700',
    },
});

export default HomeContainer;