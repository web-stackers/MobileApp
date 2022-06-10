import React from 'react';
import {Text, View} from 'react-native';

import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

const CategorySelector = ({navigation}) => {
  const ConstructionPress = () => navigation.navigate('JobDetails');
  const EventPress = () => navigation.navigate('QuotationDetails');
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.test}>Helper</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subHeading}>What you are looking for?</Text>
        <StouchableOpacity onPress={ConstructionPress} title="Construction" />
      </View>
      <View style={styles.subContainer}>
        <StouchableOpacity onPress={EventPress} title="Event" />
      </View>
    </View>
  );
};

export default CategorySelector;
