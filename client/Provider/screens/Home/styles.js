import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#121212',
    justifyContent: 'space-between',
    width: '100%'
  },
  logo: {
    marginTop: 100,
    alignSelf: 'center',
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
    paddingLeft: 10
  },
  detailView: {
    width: '80%',
    borderLeftColor: '#652C9E',
    borderLeftWidth: 5,
  },
  detail: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default styles;
