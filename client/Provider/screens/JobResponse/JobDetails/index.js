import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import styles from './styles';
import Sbutton from '../../../../components/Sbutton';

const JobDetails = ({navigation}) => {

    return ( 
        <View style={styles.container}>
                <View style={styles.btngrp}>
                    <Sbutton
                        type='primary'
                        text='Accept' 
                        onPress={() => navigation.push('Quotation')}
                    />
                    <Sbutton
                        type='secondary'
                        text='Refuse' 
                        onPress={() => navigation.push('Refuse Job')}
                    />
                </View>         
        </View>
     );
}
 
export default JobDetails;


