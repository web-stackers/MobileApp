import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const ProviderJobProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" />
        <Sbutton text="Go Back" />
      </View>
    </View>
  );
};

export default ProviderJobProfile;
