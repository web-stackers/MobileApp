import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    flexDirection: 'column',
  },
  headingContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  image: {
    flex: 1,
    width: 450,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 30,
    marginBottom: 30,
    paddingTop: 50,
  },
});

export default styles;
