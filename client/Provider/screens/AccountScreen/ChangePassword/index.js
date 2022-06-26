import React, {useState} from 'react';
import CustomInput from '../../../../components/CustomInput';
import axios from 'axios';
import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const passwordValidationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Old Password is required'),
  newPassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('New Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const ChangePassword = ({navigation, route}) => {
  let CID = route.params.id;
  const [isLoading, setIsLoading] = useState(false);

  const updateAPIData = async values => {
    await axios
      .patch(`http://10.0.2.2:5000/provider/changePassword/${CID}`, values)
      .then(response => {
        if (response.status) {
          alert('You have updated password successfully');
          setIsLoading(false);
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
            Change Password
          </Text>
          <Formik
            validationSchema={passwordValidationSchema}
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            onSubmit={values => updateAPIData(values)}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={CustomInput}
                  name="oldPassword"
                  placeholder="Old Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="newPassword"
                  placeholder="New Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                />

                <Sbutton
                  primary={true}
                  onPress={handleSubmit}
                  text="UPDATE PASSWORD"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ChangePassword;
