/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';
import StextBox from '../../../components/FormComponents/StextBox';
import Sbutton from '../../../components/Sbutton';
import {useTheme} from 'react-native-paper';
import axios from 'axios';
import { StackActions } from '@react-navigation/native';

const ConfirmOTP = ({navigation, route}) => {
  const {colors} = useTheme();
  const type = route.params.type;
  const toResendOTP = route.params.toResendOTP; //{userId, email, fName, isEmailVerification}
  const userId = toResendOTP.userId;
  console.log(toResendOTP);
  const [otp, setOtp] = React.useState('');

  const onVerify = async () => {
    try {
      const res = await axios.post(
        `http://10.0.2.2:5000/${type}/register/verifyOTP`,
        {
          userId,
          otp,
        },
      );
      console.log(res.data);
      if (toResendOTP.isEmailVerification) {
        navigation.dispatch(
          StackActions.replace('RegistrationSucceed')
        );
        // navigation.push('RegistrationSucceed');
      } else {
        navigation.dispatch(
          StackActions.replace('ChangePassword', {
            id: userId,
            type: type,
            fName: toResendOTP.fName,
          })
        );
        // navigation.push('ChangePassword', {
        //   id: userId,
        //   type: type,
        //   fName: toResendOTP.fName,
        // });
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 500) {
        Alert.alert(
          'Something went wrong',
          'There was a problem with the server, Could not proceed',
        );
      } else {
        const errorMsg = err.response.data.message;
        Alert.alert('Failed to verify', errorMsg);
      }
    }
  };

  const onResendOtp = async () => {
    try {
      const res = await axios.post(
        `http://10.0.2.2:5000/${type}/register/resendOTP`,
        toResendOTP,
      );
      Alert.alert(
        'Done',
        'OTP has been sent. Please enter the verification code to continue',
      );
    } catch (err) {
      console.log(err);
      if (err.response.status === 500) {
        Alert.alert(
          'Something went wrong',
          'There was a problem with the server, Could not proceed',
        );
      } else {
        const errorMsg = err.response.data.message;
        Alert.alert('Failed to resend OTP', errorMsg);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.quotationForm}>
        <Text style={styles.title}>Confirm OTP</Text>
        <View style={{width: '90%'}}>
          <Text style={styles.caption}>
            Verification code has been sent to the following email address
          </Text>
        </View>

        <Text style={styles.caption}>{toResendOTP.email}</Text>
        <StextBox
          placeholder="Enter the verification code"
          value={otp}
          // secureTextEntry={true}
          onChangeText={value => setOtp(value)}
        />
        <View style={{width: '96.5%'}}>
          <Sbutton
            disabled={!otp}
            primary={true}
            text="Verify"
            onPress={() => onVerify()}
          />
        </View>
        <Button
          onPress={() => onResendOtp()}
          style={styles.button}
          color={colors.primary}>
          <Text style={styles.text}>Resend OTP</Text>
        </Button>
      </View>
    </View>
  );
};

export default ConfirmOTP;
