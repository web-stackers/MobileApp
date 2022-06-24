import React from 'react';
import {View, Text, Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import Sbutton from '../../../components/Sbutton';

const RegistrationSucceed = ({route, navigation}) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', true);
  //   }, [])
  // );
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
        navigation.dispatch(e.data.action)
      }),
    [navigation]
  );
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>All done</Text>
        <Image
          style={styles.tick}
          source={require('../../../assets/images/tick.png')}
        />
        <Text style={styles.subtitle}>You have successfully registered as service consumer</Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton
          primary={true}
          text="Done"
          onPress={() => navigation.pop(1)}
        />
      </View>
    </View>
  );
};

export default RegistrationSucceed;