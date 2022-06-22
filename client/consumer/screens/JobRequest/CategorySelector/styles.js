/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    flexDirection: 'column',
  },
  headingContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  event: {
    marginTop: 20,
  },

  subContainer: {
    flex: 3,
    alignItems: 'center',
  },
  test: {
    color: 'white',
    fontSize: 120,
  },
  subHeading: {
    color: 'white',
    fontSize: 26,
    marginBottom: 30,
    paddingTop: 30,
  },
});

export default styles;
