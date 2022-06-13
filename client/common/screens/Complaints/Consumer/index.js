import React from 'react';
import {ScrollView, View, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import styles from '../styles';

const Complaints = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>
          Work Finished {'\n'}
          Date & Time {'\n'}
          Provider Name: name
        </Text>
      </View>
      <Text style={styles.content}>Choose the category</Text>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>Provider is absent</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>Provider is late</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>Quality of the work is bad</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>Asked additional money</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>Other issues</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Complaints;
