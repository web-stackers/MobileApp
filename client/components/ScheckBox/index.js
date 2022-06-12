import React from 'react';
import { useTheme } from 'react-native-paper';
import {View} from 'react-native';
import { Text, Checkbox } from 'react-native-paper';
import styles from './styles';

const ScheckBox = ({checked, setChecked, text}) => {
    const {colors} = useTheme();

    return (
        <View style={styles.checkBox}>
            <Checkbox 
                status={checked? 'checked':'unchecked'}
                onPress={() => setChecked(!checked)}
                color={colors.primary}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default ScheckBox;
