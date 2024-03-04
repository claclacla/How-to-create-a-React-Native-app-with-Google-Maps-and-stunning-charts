import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ApplicationScreensList } from '../ApplicationScreensList';

import styles from '../../styles';

type AuthenticationScreenProps = NativeStackScreenProps<ApplicationScreensList, "Authentication">;

const AuthenticationScreen: React.FC<AuthenticationScreenProps> = (props) => {
    return (
        <View>
            <TouchableHighlight
                onPress={() => props.navigation.navigate('Navigation')}
            >
                <View style={styles.button}>
                    <Text style={styles.textBig}>Go to Navigation</Text>
                </View>
            </TouchableHighlight>
        </View>

    )
}

export default AuthenticationScreen;