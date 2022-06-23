import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
  },

  header: {
    marginTop: 20,
    fontSize: 22,
    alignSelf: 'center',
  },

  description: {
    marginTop: 20,
    marginLeft: 10,
  },

  content: {
    fontSize: 18,
  },

  box: {marginTop: 30, alignItems: 'center'},

  btngrp: {
    width: '95%',
    marginTop: 30,
    alignSelf: 'center',
  },

  touchable: {
    marginTop: 20,
    backgroundColor: '#652C9E',
    borderRadius: 50,
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
