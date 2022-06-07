import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (onClick, text, height) => {
  return (
    <View>
      <TouchableOpacity {styles.button} >
        <Text style={styles.buttonText} onPress={onClick}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#652C9E',
    height: {height},
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
