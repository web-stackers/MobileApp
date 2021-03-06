/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
    height: Dimensions.get('window').height,
  },

  subContent: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  subSubContent: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 120,
  },
  checkBox: {
    marginTop: 60,
  },
  btngrp: {
    width: '95%',
    marginTop: 25,
    marginBottom: 15,
    alignSelf: 'center',
  },
  JDetailsPic: {
    height: 180,
    width: 270,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
  },
  detailField: {
    padding: 10,
    borderLeftColor: '#652C9E',
    borderWidth: 5,
    marginBottom: 8,
  },
  field: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    marginLeft: 5,
    color: 'white',
  },
  detail: {
    fontSize: 20,
    marginLeft: 5,
    color: 'white',
  },
  content: {
    padding: 5,
    marginTop: 35,
    width: '95%',
    alignSelf: 'center',
  },
});

export default styles;
