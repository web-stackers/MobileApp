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
    fontSize: 30,
    marginTop: 40,
    marginBottom: 30,
    alignSelf: 'center',
  },
  subContent: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  btngrp: {
    width: '95%',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  JDetailsPic: {
    height: 180,
    width: 270,
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default styles;
