import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },

  messageReceiver: {
    position: 'relative',
    borderRadius: 18,
    padding: 12,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginBottom: 30,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },

  messageSender: {
    backgroundColor: '#652C9E',
    borderRadius: 18,
    padding: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },

  message: {
    fontSize: 18,
    color: 'white',
  },

  timeStamp: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },

  submit: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderRadius: 15,
    padding: 4,
  },

  input: {
    flex: 1,
    color: 'green',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 12
  },

  buttonView: {
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default styles;
