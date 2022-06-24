/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
  },
  content: {
    padding: 5,
    marginTop: 35,
    width: '95%',
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
  },
  detail: {
    fontSize: 20,
    marginLeft: 5,
  },
  btngrp: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  JDetailsPic: {
    height: 180,
    width: 270,
    marginTop: 40,
    alignSelf: 'center',
  },
  map: {
    width: '90%',
    height: 400,
    alignSelf: 'center',
    marginBottom: 40,
  },
});

export default styles;
