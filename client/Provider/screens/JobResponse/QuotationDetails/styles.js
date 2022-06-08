import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height,
    },
    quotationForm: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 25
    },
    QPic: {
        height: 180,
        width: 270,
        marginTop: 0
    },
    caption: {
        color: '#fff',
        fontSize: 22,
        marginTop: 55,
        margin: 50,
        textAlign: 'center'
    }
});

export default styles;