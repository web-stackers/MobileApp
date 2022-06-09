import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
  subtext: {
    color: 'grey',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  btngrp: {
    width: '100%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
});

export default styles;
