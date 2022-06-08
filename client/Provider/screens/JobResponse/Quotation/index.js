import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const Quotation = ({navigation}) => {

    return ( 
        <View style={styles.container}>

            <View style={styles.quotationDoc}>
                <Text>Hello</Text>
            </View>

            <View style={styles.btngrp}>
                <Sbutton
                    type='primary'
                    text='Send quotation' 
                    onPress={() => navigation.push('Acknowledgement', {
                        title: "Quotation Sent !",
                        subtitle: "Please wait for the customer's response"
                    })}
                />
                <Sbutton
                    type='secondary'
                    text='Cancel' 
                    onPress={() => navigation.navigate('Job Details')}
                />
            </View>
            
        </View>
     );
}
 
export default Quotation;


