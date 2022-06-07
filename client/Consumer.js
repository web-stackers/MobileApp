import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

import Button from './components/Button';

const Consumer = () => {
  const handlePress = () => Alert.alert('Simple Button pressed');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.test}>Helper</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subHeading}>What you are looking for?</Text>
        <Button onPress={handlePress} title="Construction" />
      </View>
      <View style={styles.subContainer}>
        <Button onPress={handlePress} title="Event" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    flexDirection: 'column',
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
});

export default Consumer;
