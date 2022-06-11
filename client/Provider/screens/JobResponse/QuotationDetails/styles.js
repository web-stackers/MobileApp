import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        width: '100%',
    },
    quotationForm: {
        alignItems: 'center',
        width: '95%',
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 25
    },
    QPic: {
        height: 180,
        width: 270,
        marginTop: 80,
        marginBottom: 40
    },
    caption: {
        color: '#fff',
        fontSize: 22,
        marginTop: 50,
        margin: 40,
        textAlign: 'center'
    }
});

export default styles;