import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: '100%',
  },
  content: {
    color: '#fff',
    fontSize: 22,
    marginTop: 40,
    alignSelf: 'center',
  },
  pressable: {
    height: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginTop: 20,
  },
  pressableText: {
    marginTop: 12,
    marginLeft: 10,
    fontSize: 18,
    justifyContent: 'center',
  },

  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },

  box: {
    backgroundColor: 'grey',
    marginTop: 25,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },

  boxText: {
    fontSize: 18,
  },
  tick: {
    height: 150,
    width: 150,
    marginBottom: 85,
  },
});

export default styles;
