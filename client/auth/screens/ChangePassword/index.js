/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import StextBox from '../../../components/FormComponents/StextBox';
import Sbutton from '../../../components/Sbutton';
import {useTheme} from 'react-native-paper';
import axios from 'axios';

const ChangePassword = ({navigation, route}) => {
  const {colors} = useTheme();
  const type = route.params.type;
  const id = route.params.id;
  const fName = route.params.fName;
  console.log(route.params);
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onChangePass = async () => {
    if (newPassword == confirmPassword) {
      try {
        const res = await axios.post(
          `http://10.0.2.2:5000/${type}/forgotPassword/changePassword/${id}`,
          {
            newPassword,
          },
        );
        console.log(res.data);
        Alert.alert(
          'Done',
          'Your new password has been updated successfully',
        );
        navigation.pop(1);
      } catch (err) {
        console.log(err);
        if (err.response.status === 500) {
          Alert.alert(
            'Something went wrong',
            'There was a problem with the server, Could not proceed to forgot password',
          );
        } else {
          const errorMsg = err.response.data.message;
          Alert.alert('Failed to change password', errorMsg);
        }
      }
    } else {
      Alert.alert(
        'Mismatch Error',
        'New password and the confirm password are not matching',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.quotationForm}>
        <Text style={styles.title}>Change New Password</Text>
        <Text style={styles.caption}>
          {"Hi "+fName}
        </Text>
       
        <StextBox
          placeholder="Enter new password"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={value => setNewPassword(value)}
        />
        <StextBox
          placeholder="Enter confirm password"
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={value => setConfirmPassword(value)}
        />
        <View style={{width: '96.5%', marginTop:5}}>
          <Sbutton
            disabled={!newPassword || !confirmPassword}
            primary={true}
            text="Change Password"
            onPress={() => onChangePass()}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
