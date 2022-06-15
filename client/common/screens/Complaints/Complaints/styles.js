import {StyleSheet} from 'react-native';

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

  box: {
    backgroundColor: '#652C9E',
    marginTop: 25,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },

  boxText: {
    fontSize: 18,
    color: 'white',
  },

  list: {
    height: 50,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginTop: 20,
  },

  text: {
    marginTop: 12,
    marginLeft: 10,
    fontSize: 18,
    justifyContent: 'center',
    color: 'white',
  },
});

export default styles;
