import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const Acknowledge = ({navigation, route}) => {
  const complaintBy = route.params.by;
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>Complaint Sent</Text>
        <Image
          style={styles.tick}
          source={require('../../../../assets/images/tick.png')}
        />
        <Text style={styles.subtitle}>
          Your complaint has been sent to the admin. Please wait for admin's
          response
        </Text>
      </View>

      <View style={styles.doneButton}>
        <Sbutton
          primary={true}
          text="Done"
          // onPress={() => navigation.navigate('Home')}
          onPress={() => {
            if(complaintBy === 'consumer') {
              navigation.navigate('Job Completed Consumer');
            }
            else {
              navigation.navigate('Job History');
            }
          }}
        />
      </View>
    </View>
  );
};

export default Acknowledge;
