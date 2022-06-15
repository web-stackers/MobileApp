import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  btngrp: {
    width: '95%',
    marginBottom: 1,
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 35,
    marginBottom: 50,
    marginTop: 50,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 55,
  },
});

export default styles;
