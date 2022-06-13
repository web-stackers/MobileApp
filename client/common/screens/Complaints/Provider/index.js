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
          Consumer Name: name
        </Text>
      </View>
      <Text style={styles.content}>Choose the category</Text>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>
            Consumer is not available at the given location
          </Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.push('Complains Category')}>
          <Text style={styles.pressableText}>
            Payment is not fully paid as in Quotation
          </Text>
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
