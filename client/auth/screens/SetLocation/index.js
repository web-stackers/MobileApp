/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, Alert, PermissionsAndroid} from 'react-native';
import styles from './styles';
import Sbutton from '../../../components/Sbutton';
import axios from 'axios';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from 'react-native-geolocation-service';

const SetLocation = ({navigation, route}) => {
  const {type, toAsycnStore} = route.params;
  const user_id = toAsycnStore.result._id;
  const [isGeoSet, setIsGeoSet] = useState(false);
  //defalut location is colombo
  //my location is 9.671839180109167, 80.01724467315677 (lat,long)
  const [initialLat, setInitialLat] = useState(6.9271);
  const [initialLongi, setInitialLongi] = useState(79.8612);
  let newLat = initialLat;
  let newLongi = initialLongi;//inital must be the geolocation

  const reqLocPermission_getGeolocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
            "Helper needs access to your location " +
            "so you can pick your residential location.",
          // buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the map");
        Geolocation.getCurrentPosition(
          (position) => {
            setInitialLat(position.coords.latitude);
            setInitialLongi(position.coords.longitude);
            setIsGeoSet(true);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      } else {
        Alert.alert('Location permission denied', 'You cannot continue the login process');
        navigation.pop(1);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleSetLocation = () =>
    Alert.alert(
      'Set residential location',
      'Are you sure to set this as your residential location?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            axios.patch(`http://10.0.2.2:5000/${type}/addressUpdate/${user_id}`, {
              longitude: newLongi,
              latitude: newLat,
            });
          AsyncStorage.setItem('profile', JSON.stringify(toAsycnStore));
          if (type === 'consumer') {
            navigation.navigate('Consumer', {
              _id: user_id,
              type: type,
            });
          } else {
            navigation.navigate('Provider', {
              _id: user_id,
              type: type,
            });
          }
          },
        },
      ],
    );

  const onMarkerDragEnd = coord => {
    newLat = coord.latitude;
    newLongi = coord.longitude;
  };
  useEffect(() => {
    reqLocPermission_getGeolocation();
  }, []);
  useEffect(() => {
     newLat = initialLat;
   newLongi = initialLongi;
   console.log(newLat,newLongi);
  }, [isGeoSet]);
  return (
    <View style={styles.container}>
      {isGeoSet ? <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialLat,
          longitude: initialLongi,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          draggable
          coordinate={{latitude: initialLat, longitude: initialLongi}}
          title={'Your default residential location'}
          onDragEnd={e => {
            console.log(e.nativeEvent.coordinate);
            onMarkerDragEnd(e.nativeEvent.coordinate);
          }}
        />
      </MapView> : null}
      <View style={styles.btn}>
        <Sbutton
          primary={true}
          text="Set Location"
          disabled={!isGeoSet}
          onPress={handleSetLocation}
        />
        {/* <Sbutton text="Go Back" onPress={() => navigation.pop(1)} /> */}
      </View>
    </View>
  );
};

export default SetLocation;
