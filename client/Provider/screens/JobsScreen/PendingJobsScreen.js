import React from 'react';
import {View, Text} from 'react-native';
import {List, Button} from 'react-native-paper';

function PendingJobsScreen() {
  return (
    <View style={{backgroundColor: '#121212'}}>
    <List.Item
      title="Second Item"
      description="Item description"
      left={props => <List.Icon {...props} icon="folder" />}
      right={props => (
        <Button
          icon="eye"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          View
        </Button>
      )}
    />
    </View>
  );
}

export default PendingJobsScreen;
