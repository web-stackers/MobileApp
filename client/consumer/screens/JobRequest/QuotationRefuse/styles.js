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
    bottom: 25,
  },
  message: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  JRefusePic: {
    height: 150,
    width: 150,
    marginBottom: 50,
  },
  textField: {
    width: '100%',
    position: 'absolute',
    bottom: 300,
  },
});

export default styles;
