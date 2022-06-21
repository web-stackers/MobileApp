/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  message: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 200,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 50,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  wrong: {
    height: 250,
    width: 250,
    marginBottom: 40,
  },
  doneButton: {
    position: 'absolute',
    bottom: 100,
    width: '95%',
  },
});

export default styles;
