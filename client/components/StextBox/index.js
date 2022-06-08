import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const StextBox = ({}) => {
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return ( 
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
     );
}
 
export default StextBox;


