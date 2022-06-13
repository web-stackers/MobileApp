import React from 'react';
import { View, Text } from 'react-native';
import StouchableOpacity from '../../../components/StouchableOpacity';
import styles from './styles';

const Complaints = ({navigation}) => {
  const CategoryOnePress = () => navigation.navigate('CategoryOne');
  return (
    <View>
      <View>
        <Text>Let us know your issues</Text>
      </View>
      <View>
        <Text>Work finished, date, time, consumer or provider name</Text>
      </View>
      <View>
        <Text>Choose the category</Text>
      </View>
      <View>
        <StouchableOpacity onPress={CategoryOnePress} title="" />
      </View>
    </View>
  );
};

export default Complaints;
