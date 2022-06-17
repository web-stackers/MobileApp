import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const ProviderMap = ({navigation, route}) => {
  const {lat, longi} = route.params;

  return (
    <View style={styles.container}>
      <Sheader title="Map" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: longi,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable={false}
          coordinate={{latitude: lat, longitude: longi}}
          title={'Provider location'}
        />
      </MapView>

      <View style={styles.btngrp}>
        <Sbutton text="Go Back" onPress={() => navigation.pop(1)} />
      </View>
    </View>
  );
};

export default ProviderMap;
