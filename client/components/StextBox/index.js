import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const StextBox = ({}) => {
    const [text, onChangeText] = React.useState("Enter value");
    const [number, onChangeNumber] = React.useState(null);

    return ( 
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={text}
        />
     );
}
 
export default StextBox;


