import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const ProviderJobProfile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Name</Text>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/profile.jpg')}
        />
      </View>
      <View>
        <Text style={styles.subtitle}>Work Started Year</Text>
        <Text style={styles.subtitle}>Qualification</Text>
        <Text style={styles.subtitle}>Rating</Text>
      </View>

      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Send Request" />
        <Sbutton text="Go Back" />
      </View>
    </ScrollView>
  );
};

export default ProviderJobProfile;
