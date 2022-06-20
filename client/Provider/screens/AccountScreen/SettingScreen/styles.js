import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  headingContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flex: 2,
    alignItems: 'center',
  },
  test: {
    color: 'white',
    fontSize: 60,
  },
  subHeading: {
    color: 'white',
    fontSize: 30,
    marginBottom: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 16,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#FFF777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default styles;
