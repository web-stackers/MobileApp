import React from 'react';
import {View, Text, Image, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import Sbutton from '../../../components/Sbutton';

const Acknowledge = ({route, navigation}) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Acknowledgement') {
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Image
          style={styles.tick}
          source={require('../../../assets/images/tick.png')}
        />
        <Text style={styles.subtitle}>{route.params.subtitle}</Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton
          primary={true}
          text="Done"
          onPress={() => navigation.navigate(route.params.routeTo)}
        />
      </View>
    </View>
  );
};

export default Acknowledge;