import React from "react";
import {View, Text} from 'react-native';

import styles from "./styles";

const Quotation = ({completeTime, amount}) => {
    return (
        <View style={styles.quotationDoc}>
            <Text>Quotation</Text>
            <Text>{completeTime}</Text>
            <Text>{amount}</Text>
        </View>
    )
}

export default Quotation;