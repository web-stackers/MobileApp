import React, {useState} from 'react';
import CustomInput from '../../../../components/CustomInput';
import axios from 'axios';
import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const ProfileSchema = yup.object().shape({
  mobile: yup
    .string()
    .min(10, 'Phone number must be 10 digits!')
    .required('Phone number is Required')
    .matches(/^[0][0-9]{9}$/, 'Invalid mobile number')
    .max(10, 'Should be 10 digits maximum'),
});

const EditProfileScreen = ({navigation,route}) => {
  let CID = route.params.id;

  const [isLoading, setIsLoading] = useState(false);

  const updateAPIData = async values => {
    Alert.alert('Edit account','Are you sure to update the profile?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          axios
            .patch(`http://10.0.2.2:5000/provider/profileUpdate/${CID}`, values)
            .then(response => {
              if (response.status) {
                alert('You have updated profile successfully');
                setIsLoading(true);
                navigation.navigate('Settings');
              } else {
                throw new Error('An error has occurred');
              }
            })
            .catch(error => {
              alert('An error has occurring');
              setIsLoading(false);
            });
        },
      },
    ]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Text  style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>Change Mobile number</Text>
          <Formik
            validationSchema={ProfileSchema}
            initialValues={{
              fName: '',
              lName: '',
              mobile: '',
            }}
            onSubmit={values => updateAPIData(values)}>
            {({handleSubmit, isValid}) => (
              <>
                <Field
                  component={CustomInput}
                  name="mobile"
                  placeholder="Mobile Number"
                />

                <Sbutton
                  primary={true}
                  onPress={handleSubmit}
                  text="UPDATE MOBILE NUMBER"
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

export default EditProfileScreen;
