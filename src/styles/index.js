import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '400',
    },
    textBold: {
        fontWeight: '700',
    },
    textBig: {
        fontSize: 24,
        fontWeight: '600',
    },
    textBox: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    headerButton: {
        backgroundColor: "#f4511e",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#f4511e",
        paddingVertical: 20,
        alignItems: "center",
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default styles;