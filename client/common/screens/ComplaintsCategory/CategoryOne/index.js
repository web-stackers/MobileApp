import React from 'react';
import {Text} from 'react-native-paper';
import {View, ScrollView, Image} from 'react-native';
import styles from '../styles';
import StextBox from '../../../../components/FormComponents/StextBox/index';

const CategoryOne = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};

export default CategoryOne;