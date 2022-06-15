import React from 'react';
import {View, Text} from 'react-native';
import {List, Button} from 'react-native-paper';

const CancelledJobsScreen = () => {
  return (
    <List.Item
      title="Third Item"
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
  );
};

export default CancelledJobsScreen;
