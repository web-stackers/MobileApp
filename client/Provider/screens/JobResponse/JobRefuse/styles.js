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
    btngrp: {
        width: '100%',
        position: 'absolute',
        bottom: 25
    },
});

export default styles;