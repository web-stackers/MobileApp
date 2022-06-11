import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

import StextInput from '../../../../components/FormComponents/StextInput';

const QuotationRefuse = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>
          Please provide a reason for refusing this Quotation
        </Text>
        <Image
          style={styles.JRefusePic}
          source={require('../../../../assets/images/JRefuse.jpg')}
        />
      </View>

      <View style={styles.textField}>
        <StextInput
          label="Reason"
          multiline={true}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.btngrp}>
        <Sbutton
          type="primary"
          text="Confirm"
          onPress={() => navigation.navigate('CategorySelector')}
        />
        <Sbutton
          type="secondary"
          text="Cancel"
          onPress={() => navigation.navigate('CategorySelector')}
        />
      </View>
    </View>
  );
};

export default QuotationRefuse;
