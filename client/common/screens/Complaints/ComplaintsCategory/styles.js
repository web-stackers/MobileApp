import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },

  header: {
    marginTop: 20,
    fontSize: 22,
    alignSelf: 'center',
  },

  description: {
    marginTop: 15,
    marginBottom: -15,
    width: '95%',
    alignSelf: 'center'
  },

  content: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 23
  },

  box: {
    marginTop: 10, 
    marginBottom: 5,
    alignItems: 'center'
  },

  btngrp: {
    width: '95%',
    marginBottom: 15,
    alignSelf: 'center',
  },

  categories: {
    width: '92%',
    alignSelf: 'center',
  },

  touchable: {
    marginTop: 20,
    backgroundColor: '#652C9E',
    borderRadius: 8,
    paddingLeft: 10
  },

  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
});

export default styles;
