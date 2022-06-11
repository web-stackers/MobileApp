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
  textField: {
    width: '100%',
    position: 'absolute',
    bottom: 247,
  },
  message: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
    marginBottom: 10,
    position: 'relative',
  },
  JRefusePic: {
    height: 150,
    width: 150,
  },
});

export default styles;
