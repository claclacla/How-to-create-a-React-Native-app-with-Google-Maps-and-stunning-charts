import type { PropsWithChildren } from 'react';

import {
    Text,
    View,
} from 'react-native';

import styles from '../../../styles';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
    return (
        <View style={styles.textBox}>
            <Text
                style={[
                    styles.textBig,
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.text,
                ]}>
                {children}
            </Text>
        </View>
    );
}

export default Section;