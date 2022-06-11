import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const JobWithdrawal = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <Text style={styles.title}>
                    Provide a reason for withdrawing from job
                </Text>
                <Image
                    style={styles.JRefusePic}
                    source={require('../../../../assets/images/JRefuse.png')}
                />
            </View>

            <View style={styles.btngrp}>
                <Sbutton
                    primary={true}
                    text='Confirm' 
                    onPress={() => navigation.push('Acknowledgement', {
                        title: "Informed the Customer !",
                        subtitle: "Provided the reason to the customer"
                    })}
                />
                {/* <Sbutton
                    type='secondary'
                    text='Cancel' 
                    onPress={() => navigation.navigate('')}
                /> */}
            </View>
            
        </View>
    )
}
 
export default JobWithdrawal;


