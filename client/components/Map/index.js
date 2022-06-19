import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import styles from './styles';

const Map = ({lat, long}) => {

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
          coordinate={{latitude: lat, longitude: long}}
          title={'Your default workplace location'}
      />
    </MapView>
  );
};

export default Map;
