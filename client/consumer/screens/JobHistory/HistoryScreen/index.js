import React from 'react';
import {View, Button, SafeAreaView} from 'react-native';

import styles from './styles';

const Separator = () => <View style={styles.separator} />;

const JobsHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Completed Jobs"
          color="#000000"
          onPress={() => navigation.navigate('Completed Jobs')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Pending Jobs"
          color="#000000"
          onPress={() => navigation.navigate('Pending Jobs')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Refused Request"
          color="#000000"
          onPress={() => navigation.navigate('Refused Request')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Withdrawn Jobs"
          color="#000000"
          onPress={() => navigation.navigate('Withdrawn Jobs')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Request Sent"
          color="#000000"
          onPress={() => navigation.navigate('Request Sent')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Pending Quotation"
          color="#000000"
          onPress={() => navigation.navigate('Pending Quotation')}
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Quotation Rejected"
          color="#000000"
          onPress={() => navigation.navigate('Quotation Rejected')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  );
};

export default JobsHistory;
