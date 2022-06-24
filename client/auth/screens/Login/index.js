/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import StextBox from '../../../components/FormComponents/StextBox';
import Sbutton from '../../../components/Sbutton';
import {useTheme} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

const Login = ({navigation, route}) => {
  const {colors} = useTheme();
  const type = route.params.type;

  const [email, setEmail] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const onLogin = async () => {
    if (!isEmailValid) {
      Alert.alert('Invalid email', 'Please enter an valid email address');
    } else {
      try {
        // const res = await SecondaryUser.signIn(form);
        const res = await axios.post(`http://10.0.2.2:5000/${type}/signin`, {
          email,
          password,
        });

        console.log(res.data);
        if (res.data.result?.address?.longitude) {
          AsyncStorage.setItem('profile', JSON.stringify(res.data));
          if (type === 'consumer') {
            navigation.dispatch(
              StackActions.replace('Consumer', {
                _id: res.data.result._id,
                 type: type,
              })
            );
            // navigation.push('Consumer', {
            //   _id: res.data.result._id,
            //   type: type,
            // });
          } else {
            navigation.dispatch(
              StackActions.replace('Provider', {
                _id: res.data.result._id,
                 type: type,
              })
            );
            // navigation.push('Provider', {
            //   _id: res.data.result._id,
            //   type: type,
            // });
          }
        } else {
          Alert.alert(
            'Set residential location',
            'Since this is the first time you loged into the system, you have to pick your residential location to continue the login process',
            [
              {
                text: 'Cancel',
                onPress: () =>
                  console.log('canceled the first time location pick'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => {
                  navigation.dispatch(
                    StackActions.replace('SetLocation', {
                      toAsycnStore: res.data,
                      type: type,
                    })
                  );
                  // navigation.push('SetLocation', {
                  //   toAsycnStore: res.data,
                  //   type: type,
                  // });
                },
              },
            ],
          );
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 500) {
          Alert.alert(
            'Something went wrong',
            'There was a problem with the server, Could not login',
          );
        } else {
          const errorMsg = err.response.data.message;
          if (errorMsg === "User doesn't exist") {
            Alert.alert("User doesn't exist", 'You are not a registered user');
          }
          if (errorMsg === 'Cannot login now') {
            Alert.alert(
              'Cannot login now',
              'You have to wait until your documents get verified',
            );
          }
          if (errorMsg === 'Incomplete registration') {
            Alert.alert(
              'Incomplete registration',
              'You can try again the registration process after some time',
            );
          }
          if (errorMsg === 'Invalid credentials') {
            Alert.alert(
              'Invalid credentials',
              'Please enter valid credentials to continue',
            );
          }
        }
      }
    }
  };

  const onForgotPass = async () => {
    try {
      // const res = await SecondaryUser.signIn(form);
      const res = await axios.post(
        `http://10.0.2.2:5000/${type}/forgotPassword`,
        {
          email,
        },
      );
      console.log(res.data);
      navigation.push('ConfirmOTP', {
        toResendOTP: res.data,
        type: type,
      });
    } catch (err) {
      console.log(err);
      if (err.response.status === 500) {
        Alert.alert(
          'Something went wrong',
          'There was a problem with the server, Could not proceed to forgot password',
        );
      } else {
        const errorMsg = err.response.data.message;
        if (errorMsg === "User doesn't exist") {
          Alert.alert("User doesn't exist", 'You are not a registered user');
        }
        if (errorMsg === 'Cannot login now') {
          Alert.alert(
            'Cannot login now',
            'You have to wait until your documents get verified and then only you can change the password',
          );
        }
        if (errorMsg === 'Incomplete registration') {
          Alert.alert(
            'Incomplete registration',
            'You can try again the registration process after some time',
          );
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.QPic}
        source={require('../../../../assets/images/QPic.png')}
      /> */}

      <View style={styles.quotationForm}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.caption}>
          {type === 'consumer' ? 'as Service Consumer' : 'as Service Provider'}
        </Text>

        <StextBox
          placeholder="Enter an email address"
          value={email}
          onChangeText={value => {
            setEmail(value);
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              setIsEmailValid(true);
            } else {
              setIsEmailValid(false);
            }
          }}
        />
        <StextBox
          placeholder="Enter your password"
          value={password}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        {isEmailValid && !password ? (
          <Button
            onPress={() => onForgotPass()}
            // style={styles.forgotPass}
            // disabled={disabled}
            color={colors.primary}>
            <Text style={styles.forgotPassText}>Forgot Password ?</Text>
          </Button>
        ) : null}
        <View style={{width: '96.5%', marginTop:5}}>
          <Sbutton
            disabled={!email || !password}
            primary={true}
            text="Login"
            onPress={() => onLogin()}
          />
        </View>
        {type === 'consumer' ? (
          <Button
            onPress={() => navigation.push('ConsumerRegister')}
            style={styles.button}
            // disabled={disabled}
            color={colors.primary}>
            <Text style={styles.text}>Create Account</Text>
          </Button>
        ) : null}
      </View>
    </View>
  );
};

export default Login;
