/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import styles from './styles';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation, userParams}) => {
  let PID = userParams._id;
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [providerLocation, setProviderLocation] = useState([]);
  const [count, setCount] = useState('0');
  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem('profile');
      navigation.navigate('Start');
    } catch (err) {
      console.log('error in logout, ' + err);
    }
  };
  /* const [userProfileImage, setUserProfileImage] = useState({});
  //in API GET call
  axios({
      method: 'get',
      url,
  }).then(function(response){
      let user = response.data[0];
      setUserProfileImage(`data:${user.userPhotoExtensionType};base64, ${Buffer.from(user.userPhoto.data).toString('base64')}`);
  }); */
  //Fetch consumer address
  const getProviderLocation = () => {
    axios
      .get(`http://10.0.2.2:5000/provider/address/${PID}`)
      .then(response => {
        setProviderLocation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getCompletedJobCount = () => {
    axios
      .get(`http://10.0.2.2:5000/jobAssignment/completed/provider/count/${PID}`)
      .then(response => {
        setCount(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProviderLocation();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getProviderLocation();
    getCompletedJobCount();
  }, []);

  const getUser = async () => {
    await axios
      .get(`http://10.0.2.2:5000/provider/mobile/${PID}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://avatar.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                  color: '#FFFFFF',
                },
              ]}>
              {/* {user._id} */}
              {user.name?.fName + ' ' || ''}
              {user.name?.lName || ''}
            </Title>
            <Caption style={styles.caption}>Service Provider </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="phone" color="#652C9E" size={20} />
          <Text style={{color: '#FFF777', marginLeft: 20}}>
            {user.contact?.mobile || ''}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#652C9E" size={20} />
          <Text style={{color: '#FFF777', marginLeft: 20}}>
            {user.contact?.email || ''}
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title style={{color: '#FFFFFF'}}>
            {user.totalRating / user.ratingCount || 0}
            <Icon name="star" color="#652C9E" size={22} />{' '}
          </Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
            Rating
          </Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{color: '#FFFFFF'}}>
            {' '}
            {count} <Icon name="target" color="#652C9E" size={22} />
          </Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
            Completed Jobs
          </Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('Edit Account', {
              id: PID,
              type: 'provider',
            });
          }}>
          <View style={styles.menuItem}>
            <Icon name="pencil" color="#652C9E" size={25} />
            <Text style={styles.menuItemText}>Change Mobile number</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('Change Location', {
              lat: providerLocation.address.latitude,
              longi: providerLocation.address.longitude,
              PID: PID,
            });
          }}>
          <View style={styles.menuItem}>
            <Icon name="map-marker-radius" color="#652C9E" size={25} />
            <Text style={styles.menuItemText}>Change Location</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate('Change Password', {
              id: PID,
              type: 'provider',
            });
          }}>
          <View style={styles.menuItem}>
            <Icon name="lock" color="#652C9E" size={25} />
            <Text style={styles.menuItemText}>Change Password</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => onLogout()}>
          <View style={styles.menuItem}>
            <Icon name="power" color="#652C9E" size={25} />
            <Text style={styles.menuItemText}>Sign Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
