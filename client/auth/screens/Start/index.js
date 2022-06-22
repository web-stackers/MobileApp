import React from 'react';
import {View, Text, Image, Alert, SafeAreaView} from 'react-native';
import {DarkTheme, Surface, ThemeProvider} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import styles from './styles';
import Sbutton from '../../../components/Sbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

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
        }else{
          console.log("return null")
          return null;
          
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // React.useEffect(() => {
  //   getData('profile').then(data => data).then(value => {
  //     console.log("profileBefore:  " + value)
  //     if(!value==undefined){
  //       const profile = JSON.parse(value);
  //       if(profile.result?.NIC){
  //         setUser("provider");
  //       }else{setUser("consumer");}
  //       // setUser(prevState => {
  //       //   return {
  //       //     ...prevState,
  //       //     result:profile.result
  //       //   };
  //       // });
  //       // setUser(() =>{ return {result:profile.result}})
  //     }
  //     console.log(user)
  //   }).catch(err => console.log("cannot, "+err))
  //   }, []);
  React.useEffect(() => {
    getData('profile')
      .then(data => data)
      .then(value => {
        // if (!value == undefined) {
          // return JSON.parse(value);
          // const parsedProfile = JSON.parse(value);
          // console.log(parsedProfile)
          if (value?.result?.NIC) {
            navigation.navigate('Provider', {
              _id: value.result._id,
              type: 'provider',
            });
          } else {
            navigation.navigate('Consumer', {
              screen: 'Home',
              params: {
                _id: value.result._id,
                type: 'consumer',
              },
            });
          }
          // setUser(()=>{return JSON.parse(value);});
        //}
      })
      .catch(err => console.log('cannot, ' + err));
    // setData().then(value => {
    //     console.log("parded data is :  ")
    //     console.log(value)
    //     setUser(()=>{return value});
    //     console.log(user)
    //   }).catch(err => console.log("cannot, "+err))
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     // alert('Screen was focused');
  //     setUser(()=>{return parsedProfile});
  //     console.log(parsedProfile)
  //   //   getData('profile')
  //   // .then(data => data)
  //   // .then(value => {
  //   //   console.log("profile is "+value);
  //   //   console.log(user);
  //   //   if (!value == undefined) {
  //   //     // return JSON.parse(value);
  //   //     // setUser(()=>{return JSON.parse(value);});
  //   //     setUser("kjhkjkjk");
  //   //   } else {
  //   //     setUser(null);
  //   //   }
  //   //   console.log(user);
  //   // })
  //   // .catch(err => console.log('cannot, ' + err));
  //     // Do something when the screen is focused
  //     return () => {
  //       // alert('Screen was unfocused');
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //     };
  //   }, [isSet])
  // );

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
