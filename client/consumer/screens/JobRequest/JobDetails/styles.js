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
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 8,
  },
  linkText: {
    color: 'blue',
    fontSize: 24,
    marginLeft: 15,
    marginBottom: 8,
    marginTop: 15,
  },

  description: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },

  containerStyle: {
    margin: 10,
  },
  btngrp: {
    width: '95%',
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default styles;
