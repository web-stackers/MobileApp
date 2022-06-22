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
        await AsyncStorage.setItem('profile', JSON.stringify(res.data));
        console.log(res.data);
        if (res.data.result.address) {
          // setUser(() => {
          //   return JSON.parse(AsyncStorage.getItem('profile'));
          // });
          if (type === 'consumer') {
            navigation.push('Consumer', {
              // screen: 'Home',
              // params: {
              _id: res.data.result._id,
              type: type,
              // },
            });
          } else {
            navigation.push('Provider', {
              _id: res.data.result._id,
              type: type,
            });
          }
        } else {
          navigation.push('LocationPick', {
            _id: res.data.result._id,
            type: type,
          });
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
      //     navigation.push('Quotation Preview', {
      //       completeTime:`${date}`,
      //       amount:`${amount}`,
      //       job:{job}
      //   })
      // navigation.navigate('Consumer', {
      //   screen: 'Settings',
      //   params: { user: 'jane' },
      // })
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
            // onPress={onPress}
            // style={styles.forgotPass}
            // disabled={disabled}
            color={colors.primary}>
            <Text style={styles.forgotPassText}>Forgot Password ?</Text>
          </Button>
        ) : null}
        <View style={{width: '96.5%'}}>
          <Sbutton
            disabled={!email || !password}
            primary={true}
            text="Login"
            onPress={() => onLogin()}
          />
        </View>
        {type === 'consumer' ? (
          <Button
            // onPress={onPress}
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
