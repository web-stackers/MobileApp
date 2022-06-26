/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Alert, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import StextBox from '../../../components/FormComponents/StextBox';
import Sbutton from '../../../components/Sbutton';
import {useTheme} from 'react-native-paper';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

const ConsumerRegister = ({navigation}) => {
  const {colors} = useTheme();
  const [fName, setfName] = React.useState('');
  // const [isfNameValid, setIsfNameValid] = React.useState(false);
  const [lName, setlName] = React.useState('');
  // const [islNameValid, setIslNameValid] = React.useState(false);
  const [mobile, setMobile] = React.useState('');
  // const [isMobileValid, setIsMobileValid] = React.useState(false);
  const [email, setEmail] = React.useState('');
  // const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [password, setPassword] = React.useState('');
  // const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onRegister = async () => {
    if (!/^[A-Za-z]{3,}$/.test(fName)) {
      Alert.alert('Invalid first name', 'Must contain atleast three letters');
    } else if (!/^[A-Za-z]{3,}$/.test(lName)) {
      Alert.alert('Invalid last name', 'Must contain atleast three letters');
    } else if (!/^[0][0-9]{9}$/.test(mobile)) {
      Alert.alert('Invalid mobile', 'Please enter an valid mobile number');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      Alert.alert('Invalid email', 'Please enter an valid email address');
    } else if (!/^(?=.*\d)(?=.*[A-Z]).{8,}$/.test(password)) {
      Alert.alert(
        'Not a strong password',
        'Must contain atleast 8 characters, a number and a capital letter',
      );
    } else if (password != confirmPassword) {
      Alert.alert(
        'Mismatch passwords',
        'New password and the confirm password are not matching',
      );
    } else {
      try {
        const res = await axios.post('http://10.0.2.2:5000/consumer/register', {
          fName,
          lName,
          mobile,
          email,
          password,
        });
        console.log(res.data);
        // navigation.push('ConfirmOTP', {
        //   toResendOTP: res.data,
        //   type: 'consumer',
        // });
        navigation.dispatch(
          StackActions.replace('ConfirmOTP', {
            toResendOTP: res.data,
            type: 'consumer',
          })
        );
      } catch (err) {
        console.log(err);
        const errorMsg = err.response.data.message;
        if (err.response.status === 500) {
          Alert.alert(
            'Something went wrong',
            'There was a problem with the server, Could not register',
          );
        } else if (err.response.status === 404) {
          Alert.alert('Existing details', errorMsg);
        } else {
          Alert.alert('Something went wrong', errorMsg);
        }
      }
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.quotationForm}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.caption}>as Service Consumer</Text>
          <StextBox
            placeholder="Enter your first name"
            value={fName}
            onChangeText={value => {
              setfName(() => {
                return value;
              });
            }}
          />
          <StextBox
            placeholder="Enter your last name"
            value={lName}
            onChangeText={value => {
              setlName(() => {
                return value;
              });
            }}
          />
          <StextBox
            placeholder="Enter your mobile number"
            value={mobile}
            onChangeText={value => {
              setMobile(() => {
                return value;
              });
            }}
          />
          <StextBox
            placeholder="Enter your email address"
            value={email}
            onChangeText={value => {
              setEmail(() => {
                return value;
              });
            }}
          />
          <StextBox
            placeholder="Enter new password"
            value={password}
            secureTextEntry={true}
            onChangeText={value => {
              setPassword(() => {
                return value;
              });
            }}
          />
          <StextBox
            placeholder="Enter confirm password"
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={value =>
              setConfirmPassword(() => {
                return value;
              })
            }
          />
          <View style={{width: '96.5%', marginTop: 5}}>
            <Sbutton
              disabled={
                !fName ||
                !lName ||
                !mobile ||
                !email ||
                !password ||
                !confirmPassword
              }
              primary={true}
              text="Register"
              onPress={() => onRegister()}
            />
          </View>
          <Button
            onPress={() => navigation.pop(1)}
            style={styles.button}
            // disabled={disabled}
            color={colors.primary}>
            <Text style={styles.text}>Back to login</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConsumerRegister;
