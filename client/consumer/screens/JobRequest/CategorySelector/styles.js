/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    padding: 15,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 70,
  },
  event: {
    marginTop: 20,
  },

  subContainer: {
    alignItems: 'center',
    marginBottom: 116,
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
  detailField: {
    padding: 10,
    backgroundColor: '#3B3D3E',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    width: '20%',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  detailView: {
    width: '80%',
    borderLeftColor: '#652C9E',
    borderLeftWidth: 5,
  },
  detail: {
    fontSize: 20,
    marginLeft: 15,
    color: 'white',
  },
  points: {
    marginBottom: 80,
  },
});

export default styles;
