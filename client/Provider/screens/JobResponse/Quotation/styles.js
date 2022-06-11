import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height,
    },
    btngrp: {
        width: '95%',
        position: 'absolute',
        bottom: 25
    },
    quotationDoc: {
        height: 500,
        width: '90%',
        backgroundColor: '#DADADA',
        marginTop: 25,
        alignItems: 'center'
    }
});

export default styles;