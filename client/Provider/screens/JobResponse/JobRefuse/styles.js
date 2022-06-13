import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    width: '100%',
  },
  btngrp: {
    width: '95%',
    position: 'absolute',
    bottom: 25,
  },
  message: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    marginBottom: 50,
    textAlign: 'center'
  },
  JRefusePic: {
    height: 150,
    width: 150,
    marginBottom: 50
  },
  reasons: {
    padding: 5,
    width: '95%'
  },
  radioButton: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  }
});

export default styles;
