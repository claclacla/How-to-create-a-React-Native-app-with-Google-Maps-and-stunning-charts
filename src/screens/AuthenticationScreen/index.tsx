import React from 'react';
import { useDispatch } from 'react-redux';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { setLocalStorageKey } from '../../repositories/localStorage/authentication';

import { ApplicationScreensList } from '../../screensList/ApplicationScreensList';

import styles from '../../styles';

type AuthenticationScreenProps = NativeStackScreenProps<ApplicationScreensList, "Authentication">;

/*

!!! PAY ATTENTION !!!

Without setting the authentication key, the Main screen is unreachable

props.navigation.navigate('Main');

*/

const AuthenticationScreen: React.FC<AuthenticationScreenProps> = (props) => {
    const dispatch = useDispatch();

    return (
        <View>
            <TouchableHighlight
                onPress={() => dispatch(setLocalStorageKey("key"))}
            >
                <View style={styles.button}>
                    <Text style={styles.textBig}>Go to Navigation</Text>
                </View>
            </TouchableHighlight>
        </View >

    )
}

export default AuthenticationScreen;