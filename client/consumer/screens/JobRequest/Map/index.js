/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import axios from 'axios';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const Map = ({navigation, route}) => {
  const {lat, longi, CID} = route.params;

  let newLat = lat;
  let newLongi = longi;

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
            axios.patch(`http://10.0.2.2:5000/consumer/addressUpdate/${CID}`, {
              longitude: newLongi,
              latitude: newLat,
            });
            navigation.pop(1);
          },
        },
      ],
    );

  const onMarkerDragEnd = coord => {
    newLat = coord.latitude;
    newLongi = coord.longitude;
  };

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
          draggable
          coordinate={{latitude: lat, longitude: longi}}
          title={'Your default workplace location'}
          onDragEnd={e => {
            console.log(e.nativeEvent.coordinate);
            onMarkerDragEnd(e.nativeEvent.coordinate);
          }}
        />
      </MapView>

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
