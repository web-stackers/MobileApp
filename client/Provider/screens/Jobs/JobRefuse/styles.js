import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  btngrp: {
    width: '95%',
    marginBottom: 10
  },
  message: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    textAlign: 'center'
  },
  JRefusePic: {
    height: 150,
    width: 150,
    marginBottom: 25
  },
  reasons: {
    padding: 5,
    width: '95%'
  },
  radioButton: {
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  },
  input: {
    height: 75,
    width: '95%',
    margin: 5,
    borderWidth: 1,
    padding: 2,
    color: 'white',
  },
});

export default styles;