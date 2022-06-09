import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../Sbutton';

const Acknowledge = ({title, subtitle, handlePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.tick}
          source={require('../../assets/images/tick.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton type="primary" text="Done" onPress={handlePress} />
      </View>
    </View>
  );
};

export default Acknowledge;
