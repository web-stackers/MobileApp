import React from 'react';
import {View, Text, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import axios from 'axios';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const ChangeLocation = ({navigation, route}) => {
  const {lat, longi, PID} = route.params;

  let newLat = lat;
  let newLongi = longi;

  const handleSetLocation = () =>
    Alert.alert(
      'Set new home location',
      'Are you sure to set this as your home location?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            axios.patch(`http://10.0.2.2:5000/provider/addressUpdate/${PID}`, {
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
      </View>
    </View>
  );
};

export default ChangeLocation;
