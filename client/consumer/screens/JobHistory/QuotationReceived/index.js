/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {ListItem, Card} from 'react-native-elements';
import {List} from 'react-native-paper';
import styles from './styles';
import axios from 'axios';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Separator = () => <View style={styles.separator} />;
import Sbutton from '../../../../components/Sbutton';

const QuotationReceived = ({navigation, route}) => {
  const {fname, lname, rating, description, id, state, jobType, reason, amount} = route.params;
  const GoBack = () => {
    navigation.pop(1);
  };

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
              {fname} {lname}
            </Title>
            <Caption style={styles.caption}> Service Provider </Caption>
          </View>
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
            {rating} <Icon name="star" color="#652C9E" size={22} />
            {''}
          </Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
            Rating
          </Caption>
        </View>
        <View style={styles.infoBox}>
          <Title style={{color: '#FFFFFF'}}>
            {' '}
            13 <Icon name="target" color="#652C9E" size={22} />
          </Title>
          <Caption style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
            Completed Jobs
          </Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemSubtitle}>Issue</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>{description}</Text>
        </View>
        <Separator />
        <View style={styles.menuItem}>
          <Text style={styles.menuItemSubtitle}>State of the work</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>{state}</Text>
        </View>
        <Separator />
        <View style={styles.menuItem}>
          <Text style={styles.menuItemSubtitle}>Quotation received date</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Date</Text>
        </View>
        <Separator />
        <View style={styles.btngrp}>
          <Sbutton primary={true} text="View Quotation" />
        </View>
        <View style={styles.btngrp}>
          <Sbutton text="Go Back" onPress={GoBack} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuotationReceived;
