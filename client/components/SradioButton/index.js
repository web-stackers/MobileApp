import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import { useTheme } from 'react-native-paper';

import styles from './styles';

const SradioButton = ({value, text}) => {
    const { colors } = useTheme();

    return (
        <View style={styles.radioButton}>
          <RadioButton 
            value={value} 
            color={colors.primary}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default SradioButton;