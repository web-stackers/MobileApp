import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  message: {
    width: '100%',
    height: Dimensions.get('window').height,
    alignItems: 'center',
    marginTop: 280,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    marginBottom: 82,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  tick: {
    height: 150,
    width: 150,
    marginBottom: 85,
  },
  doneButton: {
    position: 'absolute',
    bottom: 50,
    width: '95%',
  },
});

export default styles;