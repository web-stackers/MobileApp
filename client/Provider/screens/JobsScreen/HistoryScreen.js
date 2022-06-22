/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, SafeAreaView,StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#424447',
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});

export default JobsHistory;
