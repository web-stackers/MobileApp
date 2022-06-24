/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, Alert, SafeAreaView} from 'react-native';
import {DarkTheme, Surface, ThemeProvider} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import styles from './styles';
import Sbutton from '../../../components/Sbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const Start = ({navigation}) => {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [type, setType] = React.useState('');
  // const [isSet, setIsSet] = React.useState('');
  // let parsedProfile;
  // AsyncStorage.setItem('profile', JSON.stringify({result:{email:"gowsigan@outlook.com",password:"sfsdfd"},token:"dfgds"}));
  // AsyncStorage.removeItem('profile');

  const getData = async key => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        if (data !== undefined) {
          return JSON.parse(data);
        } else {
          console.log('return null');
          return null;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  // React.useEffect(() => {
  //   getData('profile')
  //     .then(data => data)
  //     .then(value => {
  //       if (value?.result?.NIC) {
  //         navigation.dispatch(
  //           StackActions.replace('Provider', {
  //             _id: value.result._id,
  //             type: 'provider',
  //           })
  //         );
  //         // navigation.navigate('Provider', {
  //         //   _id: value.result._id,
  //         //   type: 'provider',
  //         // });
  //       } else {
  //         navigation.dispatch(
  //           StackActions.replace('Consumer', {
  //             _id: value.result._id,
  //             type: 'consumer',
  //           })
  //         );
  //         // navigation.navigate('Consumer', {
  //         //   _id: value.result._id,
  //         //   type: 'consumer',
  //         // });
  //       }

  //     })
  //     .catch(err => console.log('cannot, ' + err));
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      getData('profile')
      .then(data => data)
      .then(value => {
        if (value?.result?.NIC) {
          navigation.dispatch(
            StackActions.replace('Provider', {
              _id: value.result._id,
              type: 'provider',
            })
          );
          // navigation.navigate('Provider', {
          //   _id: value.result._id,
          //   type: 'provider',
          // });
        } else {
          navigation.dispatch(
            StackActions.replace('Consumer', {
              _id: value.result._id,
              type: 'consumer',
            })
          );
          // navigation.navigate('Consumer', {
          //   _id: value.result._id,
          //   type: 'consumer',
          // });
        }
        // setUser(()=>{return JSON.parse(value);});
        //}
      })
      .catch(err => console.log('cannot, ' + err));
      return () => {
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />

      <View style={styles.quotationForm}>
        <View style={{width: '100%'}}>
          <SafeAreaView>
            <ThemeProvider theme={DarkTheme}>
              <DropDown
                label={'You are a'}
                mode={'outlined'}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={type}
                setValue={setType}
                list={[
                  {label: 'Service Consumer', value: 'consumer'},
                  {label: 'Service Provider', value: 'provider'},
                ]}
              />
            </ThemeProvider>
          </SafeAreaView>
        </View>
        <Sbutton
          primary={true}
          text="Get Started"
          disabled={!type}
          onPress={() => {
            navigation.push('Login', {
              type: type,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Start;
