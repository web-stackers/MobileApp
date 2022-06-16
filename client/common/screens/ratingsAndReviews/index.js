import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {TextInput} from 'react-native-paper';

const RatingsAndReviews = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outBox}>
        <Text style={styles.topContent}>Please Rate name</Text>
        <View style={styles.inBox}>
          <Text style={styles.middleContent}>How was the service?</Text>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInput} label="Enter Reviews Here" />
          </View>
          <View style={styles.buttonView}>
            <Button title="Rate Now" color="#652C9E" />
          </View>
        </View>

        <View>
          <Text style={styles.bottomContent}>May be later</Text>
        </View>
      </View>
    </View>
  );
};

export default RatingsAndReviews;
