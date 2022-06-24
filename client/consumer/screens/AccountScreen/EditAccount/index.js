/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useTheme} from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
import axios from 'axios';
import BottomSheet from 'reanimated-bottom-sheet';
import * as Yup from 'yup';
import {Formik} from 'formik';

const ProfileSchema = Yup.object().shape({
  fName: Yup.string()
    .required('First name is required')
    .max(30, 'First name is Too Long!')
    .min(2, 'First name is Too Short!'),
  lName: Yup.string()
    .required('Last name is required')
    .max(30, 'Last name is Too Long!')
    .min(2, 'Last name is Too Short!'),
  mobile: Yup.number('Phone number is use only number')
    .min(10, 'Phone number must be 10 characters!')
    .required('Phone number is Required')
    .max(10, 'Should be 10 chars maximum'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum'),
});
const EditProfileScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState([]);
  const getUser = async () => {
    await axios
      .get('http://10.0.2.2:5000/consumer/62132b7bc4afd22e5fc49677')
      .then(response => {
        setIsLoading(false);
        setUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const [image, setImage] = useState(
    'https://api.adorable.io/avatars/80/abott@adorable.png',
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      bs.current.snapTo(1);
    });
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const onChangeFirstNameHandler = firstName => {
    setFirstName(firstName);
  };

  const onChangeLastNameHandler = lastName => {
    setLastName(lastName);
  };

  const onChangeNumberHandler = number => {
    setNumber(number);
  };

  const onChangePasswordHandler = password => {
    setPassword(password);
  };

  const updateAPIData = async () => {
    await axios
      .patch(
        `http://10.0.2.2:5000/consumer/profileUpdate/62132b7bc4afd22e5fc49677`,
        {
          fName: firstName,
          lName: lastName,
          mobile: number,
          password: password,
        },
      )
      .then(response => {
        if (response.status) {
          alert(` You have updated successfully`);
          setIsLoading(false);
          // setFirstName(firstName);
          // setEmail('');
          AsyncStorage.removeItem('profile');
          navigation.navigate('Start');
        } else {
          throw new Error('An error has occurred');
        }
      })
      .catch(error => {
        alert('An error has occurring');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
            {user.name?.fName + ' ' || ''}
            {user.name?.lName || ''}
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            editable={!isLoading}
            //defaultValue={user.name?.fName || ''}
            onChangeText={onChangeFirstNameHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            // defaultValue={user.name?.lName || ''}
            editable={!isLoading}
            onChangeText={onChangeLastNameHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            //defaultValue={user.contact?.mobile || ''}
            editable={!isLoading}
            onChangeText={onChangeNumberHandler}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            //value={user?.password || ''}
            editable={!isLoading}
            onChangeText={onChangePasswordHandler}
            secureTextEntry={passwordVisible}
            /* right={
              <TextInput.Icon
                name={passwordVisible ? 'eye' : 'eye-off'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            } */
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          disabled={isLoading}
          onPress={updateAPIData}>
          <Text style={styles.panelButtonTitle}>Update</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;
