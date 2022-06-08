import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const Sbutton = ({type, text, onPress}) => {

    const bgColor = type==='primary'? '#652C9E':'#1F2221';
    const textColor = '#FFF';

    return ( 
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:bgColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text,{color:textColor}]}>{text}</Text>
            </Pressable>
        </View>
     );
}
 
export default Sbutton;


