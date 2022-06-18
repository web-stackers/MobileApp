import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import Sbutton from '../../../../components/Sbutton';

const JobScreen = () => {
  return (
    <View>
      <Sbutton primary={true} text="View Quotation" />
      <Sbutton primary={true} text="Withdrawal Request" />
      <Sbutton primary={true} text="Make Complaint" />
      <Sbutton primary={true} text="Make Rating" />
    </View>
  );
};

export default JobScreen;
