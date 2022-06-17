import React, {useState, useEffect} from 'react';
import {View, Text, Image, Alert} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';
import Sheader from '../../../../components/Sheader';

import {launchImageLibrary} from 'react-native-image-picker';

import axios from 'axios';

const PhotoUpload = ({navigation}) => {
  const [file, setFile] = useState('');
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };

  const openGallery = async () => {
    const image = await launchImageLibrary(options);
    console.log('image calling.............................');
    console.log(image.assets[0]);
    setFile(image.assets[0]);
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('file', {
    //   uri: image.assets[0].uri,
    //   type: image.assets[0].type,
    //   name: image.assets[0].fileName,
    // });
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

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
          information. (if you want you can skip this step also)
        </Text>
      </View>
      <View style={styles.btngrp}>
        <Sbutton primary={true} text="Upload" onPress={openGallery} />
        {/* <Sbutton primary={true} text="Upload" onPress={handleUpload} /> */}
        <Sbutton text="Skip" onPress={handleSkip} />
      </View>
    </View>
  );
};

export default PhotoUpload;
