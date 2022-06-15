import React from 'react';
import {View, Button, SafeAreaView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
   });

const Separator = () => <View style={styles.separator}/>;

const OrdersScreen = ({navigation}) => {
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
        title="Cancelled Jobs"
        color="#000000"
        onPress={() => navigation.navigate('Cancelled Jobs')}
      />
    </View>
    <Separator />
  </SafeAreaView>
  );
};

export default OrdersScreen;


