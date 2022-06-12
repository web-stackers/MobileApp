import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../Sbutton';

const Sacknowledge = ({title, subtitle, onPress}) => {
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
        <Sbutton primary={true} text="Done" onPress={onPress} />
      </View>
    </View>
  );
};

export default Sacknowledge;
