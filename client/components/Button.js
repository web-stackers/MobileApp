import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (onPress, text) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={onPress}>
          {text}
        </Text>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Button;
