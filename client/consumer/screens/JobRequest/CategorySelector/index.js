import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

import StouchableOpacity from '../../../../components/StouchableOpacity';
import styles from './styles';

const CategorySelector = ({navigation}) => {
  const jobTypeSelect = 'Mason';
  const ConstructionPress = () => navigation.navigate('JobDetails');
  const EventPress = () =>
    navigation.navigate('QuotationDetails', {jobTypeSelect});
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <ImageBackground
          source={require('../../../../assets/images/mobile.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.test}>Helper</Text>
        </ImageBackground>
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
