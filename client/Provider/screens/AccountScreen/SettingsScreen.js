/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from '../../../components/Styles';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsScreen = ({navigation}) => {
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
                },
              ]}>
              Vinoth Velu
            </Title>
            <Caption style={styles.caption}> Mason </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            Jaffna,SriLanka
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>0762985633</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            vellummyilumvinoth1999@email.com
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
          <Title>4</Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold'}}>
            Rating <Icon name="star" color="#652C9E" size={23} />
          </Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>13</Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold'}}>
            Completed Jobs <Icon name="target" color="#652C9E" size={23} />
          </Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('Edit Account')}>
          <View style={styles.menuItem}>
            <Icon name="pencil" color="#652C9E" size={25} />
            <Text style={styles.menuItemText}>Edit Account</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Sign Out')}>
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
