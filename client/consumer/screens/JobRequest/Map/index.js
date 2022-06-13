import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import MapView from 'react-native-maps';

const Map = ({navigation, route}) => {
  const {jobType} = route.params;
  return (
    <View style={styles.container}>
      <Sheader title="Map"></Sheader>
      {/* <Text style={styles.text}>{jobType}</Text> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.9271,
          longitude: 79.8612,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Set Location"
          onPress={() => navigation.navigate('QuotationAcknowledge')}
        />
        <Sbutton
          text="Go Back"
          onPress={() => navigation.navigate('JobDetails')}
        />
      </View>
    </View>
  );
};

export default Map;
