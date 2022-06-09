import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const StextArea = () => {
  return (
    <View style={styles.textAreaContainer}>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Type something"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
};

export default StextArea;
