/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {useTheme} from 'react-native-paper';
import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Animated from 'react-native-reanimated';
import axios from 'axios';

const EditProfileScreen = () => {
  const {colors} = useTheme();
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const onChangeFirstNameHandler = firstName => {
    setFirstName(firstName);
  };

  const onChangeLastNameHandler = lastName => {
    setLastName(lastName);
  };

  const onChangeEmailHandler = email => {
    setEmail(email);
  };

  const onChangeNumberHandler = number => {
    setNumber(number);
  };

  const onChangePasswordHandler = password => {
    setPassword(password);
  };

  const onSubmitFormHandler = event => {
    if (!firstName.trim() || !lastName.trim()) {
      alert('First Name or Last Name is invalid');
      return;
    }
    setIsLoading(true);

    const configurationObject = {
      url: `http://10.0.2.2:5000/provider/629f77da0d2903e52b176866`,
      method: 'put',
      data: {
        firstName,
        email,
        lastName,
        number,
        password,
      },
    };

    axios(configurationObject)
      .then(response => {
        if (response.status === 304) {
          alert(` You have updated: ${JSON.stringify(response.data)}`);
          setIsLoading(false);
          setFirstName('');
          setEmail('');
        } else {
          throw new Error('An error has occurr');
        }
      })
      .catch(error => {
        alert('An error has occurring');
        setIsLoading(false);
      });
  };

  const getUser = async () => {
    await axios
      .get('http://10.0.2.2:5000/provider/629f77da0d2903e52b176866')
      .then(response => {
        setIsLoading(false);
        setUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateAPIData = async () => {
    await axios.put(`http://10.0.2.2:5000/provider/629f77da0d2903e52b176866`, {
      firstName,
      lastName,
      email,
      number,
      password,
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          margin: 20,
        }}>
        <View style={{alignItems: 'center'}}>
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
            defaultValue={user.name?.fName || ''}
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
            defaultValue={user.name?.lName || ''}
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
            defaultValue={user.contact?.mobile || ''}
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
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            editable={!isLoading}
            defaultValue={user.contact?.email || ''}
            onChangeText={onChangeEmailHandler}
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
            autoCorrect={false}
            value={user?.password || ''}
            editable={!isLoading}
            onChangeText={onChangePasswordHandler}
            secureTextEntry
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
          disabled={!isLoading}
          onPress={updateAPIData}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;
