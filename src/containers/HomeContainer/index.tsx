import React from 'react';

import {
    ScrollView,
    Text,
    useColorScheme,
    View,
    StyleSheet,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Section from './Components/Section';

export type RootStackParamList = {
    Home: undefined;
    Map: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeContainer: React.FC<HomeScreenProps> = (props) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Button
                title="Go to Map"
                onPress={() => props.navigation.navigate('Map')}
            />
            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
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
                <LearnMoreLinks />
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