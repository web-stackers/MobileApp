import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Consumer = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 3,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          //   color: 'white',
        }}>
        <Text>Hello, world!</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}}></View>
      <View style={{flex: 2, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
});

export default Consumer;
