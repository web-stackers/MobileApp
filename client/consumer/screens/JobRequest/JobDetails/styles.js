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
    marginBottom: 20,
  },
  selectText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
  subtext: {
    color: 'grey',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btngrp: {
    width: '100%',
    position: 'absolute',
    bottom: 35,
    alignSelf: 'center',
  },
  inputAndroid: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 8,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default styles;
