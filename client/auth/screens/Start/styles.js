import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    width: '100%',
  },
  quotationForm: {
    padding: 5,
    alignItems: 'center',
    width: '95%',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: win.width/2,
    // marginLeft:'25%',
    // marginRight:'25%',
    marginTop: 70,
    marginBottom: 420,
  },
  caption: {
    color: '#fff',
    fontSize: 22,
    marginTop: 25,
    margin: 20,
    textAlign: 'center',
  },
});

export default styles;
