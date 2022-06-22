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
          title="Refused Jobs"
          color="#000000"
          onPress={() => navigation.navigate('Refused Jobs')}
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
          title="Pending Request"
          color="#000000"
          onPress={() => navigation.navigate('Pending Request')}
        />
      </View>
      <Separator />
    </SafeAreaView>
  );
};

export default JobsHistory;
