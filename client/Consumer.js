import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const Consumer = () => {
  const handlePress = () => Alert.alert('Simple Button pressed');
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.test}>Helper</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.buttonText}>What you are looking for?</Text>
        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.button,
            {
              marginTop: 50,
            },
          ]}>
          <Text style={styles.buttonText}>Consruction</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
  },
  subContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    color: 'white',
    fontSize: 60,
  },
  button: {
    backgroundColor: '#652C9E',
    height: 100,
    width: 500,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Consumer;
