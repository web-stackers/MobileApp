import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const Acknowledge = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Image
          style={styles.tick}
          source={require('../../../../assets/images/tick.png')}
        />
        <Text style={styles.subtitle}>{route.params.subtitle}</Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton
          primary={true}
          text="Done"
          onPress={() => navigation.navigate('Job Details')}
        />
      </View>
    </View>
  );
};

export default Acknowledge;
