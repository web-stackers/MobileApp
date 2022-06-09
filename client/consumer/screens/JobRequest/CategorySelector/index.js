import React from 'react';
import {Text, View, Alert} from 'react-native';

import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

const CategorySelector = () => {
  const handlePress = () => Alert.alert('Simple Button pressed');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.test}>Helper</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subHeading}>What you are looking for?</Text>
        <StouchableOpacity onPress={handlePress} title="Construction" />
      </View>
      <View style={styles.subContainer}>
        <StouchableOpacity onPress={handlePress} title="Event" />
      </View>
    </View>
  );
};

export default CategorySelector;
