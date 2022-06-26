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
    width: '95%',
    alignSelf: 'center',
  },

  content: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 23,
  },

  box: {
    marginTop: 15,
    alignItems: 'center',
  },

  btn: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },

  categories: {
    width: '92%',
    alignSelf: 'center',
  },

  touchable: {
    marginTop: 20,
    backgroundColor: '#652C9E',
    borderRadius: 8,
  },

  touchableContent: {fontSize: 18, paddingLeft: 10},

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
