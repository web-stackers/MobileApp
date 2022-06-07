import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, marginTop}) => {
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
    height: 100,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Button;
