import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const StouchableOpacity = ({onPress, title, marginTop}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#652C9E',
    height: 80,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default StouchableOpacity;
