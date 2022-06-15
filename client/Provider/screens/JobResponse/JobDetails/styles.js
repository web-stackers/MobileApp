import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
  },
  content: {
    padding: 5,
    marginTop: 40,
    width: '95%',
    alignSelf: 'center',
    fontSize: 20,
    //marginLeft: 15,
    lineHeight: 50
  },
  btngrp: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15
  },
  JDetailsPic: {
    height: 180,
    width: 270,
    marginTop: 50,
    alignSelf: 'center',
  },
/*   spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  }, */
});

export default styles;
