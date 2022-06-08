import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        width: '100%',
        height: Dimensions.get('window').height,
    },
    content: {
        color: '#fff',
        fontSize: 22,
        marginTop: 40,
        marginLeft: 15
    },
    btngrp: {
        width: '100%',
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center'
    },
    JDetailsPic: {
        height: 180,
        width: 270,
        marginTop: 50,
        alignSelf: 'center'
    }
});

export default styles;