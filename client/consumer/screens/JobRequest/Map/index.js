import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

import MapView from 'react-native-maps';

const Map = ({navigation, route}) => {
  const {lat, longi, CID} = route.params;

  const handleSetLocation = () =>
    Alert.alert(
      'Set new workplace location',
      'Are you sure to set this as your workplace location?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            axios.patch(
              'http://10.0.2.2:5000/consumer/addressUpdate/62132b7bc4afd22e5fc49677',
              {
                longitude: longi,
                latitude: lat,
              },
            );
            navigation.pop(1);
          },
        },
      ],
    );

  return (
    <View style={styles.container}>
      <Sheader title="Map"></Sheader>
      {/* <Text style={styles.text}>{lat}</Text>
      <Text style={styles.text}>{longi}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: lat,
          longitude: longi,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Set Location"
          onPress={handleSetLocation}
        />
        <Sbutton text="Go Back" onPress={() => navigation.pop(1)} />
      </View>
    </View>
  );
};

export default Map;
