import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default styles;
