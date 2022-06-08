import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const JobRefusePage = ({navigation}) => {

    return ( 
        <View style={styles.container}>
            <View style={styles.message}>
                <Text style={styles.title}>
                    Please provide a reason for refusing this job
                </Text>
                <Image
                    style={styles.JRefusePic}
                    source={require('../../../../assets/images/JRefuse.jpg')}
                />
            </View>

            <View style={styles.btngrp}>
                <Sbutton
                    type='primary'
                    text='Confirm' 
                    onPress={() => navigation.push('Acknowledgement', {
                        title: "Informed the Customer !",
                        subtitle: "Provided the reason to the customer"
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
 
export default JobRefusePage;


