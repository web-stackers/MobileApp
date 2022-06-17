import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
  },

  topContent: {
    color: '#fff',
    fontSize: 22,
    marginTop: 15,
    alignSelf: 'center',
  },

  middleContent: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 18,
  },

  outBox: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginTop: 150,
    height: 500,
    alignItems: 'center',
  },

  inBox: {
    backgroundColor: 'rgba(137, 137, 137, 0.2)',
    marginTop: 25,
    height: 350,
    width: '90%',
  },

  textInputView: {alignItems: 'center', marginTop:30},

  textInput: {width: '90%', height: 120},

  buttonView: {
    alignItems: 'center',
    marginTop: 25,
  },

  bottomContent: {
    marginTop: 30,
    fontSize: 18,
    color: 'white',
  },

  starView: {
    marginTop: 25,
  },
});

export default styles;
