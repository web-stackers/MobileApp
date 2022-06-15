import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from '../../../components/Styles';
import {List, Button} from 'react-native-paper';

const CompletedJobsScreen = ({navigation}) => {
  return (
    <List.Item
      title="First Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
      right={props => (
        <Button
          icon="eye"
          mode="contained"
          onPress={() => navigation.navigate('Completed Jobs')}>
          View
        </Button>
      )}
    />
  );
};

export default CompletedJobsScreen;
