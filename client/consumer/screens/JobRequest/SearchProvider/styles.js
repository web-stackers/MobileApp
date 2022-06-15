/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#424447',
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
