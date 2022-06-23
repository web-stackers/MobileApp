/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
    padding: 15,
  },
  stateField: {
    padding: 10,
    marginBottom: 10,
    height: 80,
    backgroundColor: '#606465',
    borderColor: '#3b3d3e',
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  state: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    marginLeft: 5,
  },
});

export default styles;
