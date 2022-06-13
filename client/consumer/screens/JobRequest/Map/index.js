import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map</Text>
    </View>
  );
};

export default Map;
