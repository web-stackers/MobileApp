import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    width: '100%',
  },
  quotationForm: {
    // padding: 5,
    alignItems: 'center',
    width: '95%',
    flex: 1,
    // justifyContent: 'space-between',
    // marginBottom: 20,
  },
  QPic: {
    height: 180,
    width: 270,
    marginTop: 60,
    marginBottom: 60,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    marginTop: 110,
    marginBottom: 6,
    // margin: 20,
    textAlign: 'center',
  },
  caption: {
    color: '#aaa',
    fontSize: 17,
    marginTop: 3,
    marginBottom: 10,
    // margin: 20,
    textAlign: 'center',
  },
  forgotPassText: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
  button: {
    padding: 5,
    width: '100%',
    borderRadius: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
