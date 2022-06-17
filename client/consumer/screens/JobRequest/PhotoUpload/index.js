import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PhotoUpload = ({navigation}) => {
  const handleSkip = () => {
    navigation.navigate('JobAcknowledge');
  };

  const handleUpload = () => {
    Alert.alert('Upload Photo', 'Are you sure to upload this image?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('JobAcknowledge');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Sheader title="Upload photo" />
      <View style={styles.message}>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.png')}
        />
        <Text style={styles.title}>
          You can able to upload a photo related to your job for more clear
          information
        </Text>
      </View>
      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Upload" onPress={handleUpload} />
        <Sbutton text="Skip" onPress={handleSkip} />
      </View>
    </View>
  );
};

export default PhotoUpload;
