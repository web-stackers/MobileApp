import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {List, Button} from 'react-native-paper';

const CompletedJobsScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#121212'}}>
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
    </View>
  );
};

export default CompletedJobsScreen;
