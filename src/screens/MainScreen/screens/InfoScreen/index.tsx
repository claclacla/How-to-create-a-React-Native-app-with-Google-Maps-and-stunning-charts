import React from 'react';

import {
    ScrollView,
    Text,
    View,
} from 'react-native';

import {
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../../../../styles';

import Section from './Components/Section';

function InfoScreen() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
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

export default InfoScreen;