import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  SafeAreaView,
  TextInput,
  // Button,
} from 'react-native';

import DatePicker from 'react-native-datepicker';

import Sheader from '../../../../components/Sheader';
import StouchableOpacity from '../../../../components/StouchableOpacity';

const JobDetails = () => {
  const handlePress = () => Alert.alert('Form submitted');
  const [inputs, setInputs] = useState('');

  return (
    <View style={styles.container}>
      <Sheader title="Search for provider"></Sheader>
      <SafeAreaView>
        <Text style={styles.text}>When you want the work to be done?</Text>
        <TextInput
          style={styles.input}
          placeholder="Date"
          onChangeText={setInputs}
          value={inputs}
        />
      </SafeAreaView>
      <StouchableOpacity onPress={handlePress} title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D1D',
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default JobDetails;
