import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const NoProviders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>No Results Found</Text>
        <Image
          style={styles.tick}
          source={require('../../../../assets/images/wrong.png')}
        />
        <Text style={styles.subtitle}>
          We are sorry to inform you that, on your specific job type, no service
          providers are available near your area. Soon, we will try to provide
          the service in your area.
        </Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton
          primary={true}
          text="Done"
          onPress={() =>
            navigation.navigate('JobWithdrawal', {
              id: '6213638f657adfba60a68786',
            })
          }
        />
      </View>
    </View>
  );
};

export default NoProviders;
