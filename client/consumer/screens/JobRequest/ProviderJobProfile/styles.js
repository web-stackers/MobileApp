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
    width: '95%',
    marginBottom: 1,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default styles;
