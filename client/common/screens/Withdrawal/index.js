import React from 'react';
import { View, Image, Alert } from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../components/Sbutton';
import StextBox from '../../../components/FormComponents/StextBox';
import SradioButton from '../../../components/SradioButton';

const Withdrawal = ({navigation, route}) => {
    const [value, setValue] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [otherReason, setOtherReason] = React.useState('');

    const texts = [
        'Need more than the estimated time' ,
        'Costs more than the estimated amount',
        'Unavailable on requested day',
        'Other'
    ]

    // Function to validate reason and post to database
    const validateReason = () => {
        if (reason==='' || value === 3 && otherReason==='') {
          Alert.alert(
            'Reason for withdrawal',
            'Please provide the reason for withdrawing from this job',
          );
        } else {
            axios.patch(`http://10.0.2.2:5000/jobAssignment/withdrawlPending/62136a2d657adfba60a6878a`, {
                arisedBy: route.params.arisedBy,
                reason: value===3? otherReason: reason,
            })
            .then((response) => {
                navigation.push('Acknowledgement', {
                  title: 'Withdrawal request sent !',
                  subtitle: 'Withdrawal request under review. You will receive an email of the results.',
                  routeTo: 'Job Details'
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <Text style={styles.title}>
                    Please provide a reason for withdrawing from this job
                </Text>
                <Image
                    style={styles.JRefusePic}
                    source={require('../../../assets/images/JRefuse.png')}
                />
            </View>

            <View style={styles.reasons}>
                <RadioButton.Group
                    onValueChange={newValue => {setValue(newValue); setReason(texts[newValue]);}}
                    value={value}
                >
                    <SradioButton
                        value={0}
                        text={texts[0]}
                    />
                    <SradioButton
                        value={1}
                        text={texts[1]}
                    />
                    <SradioButton
                        value={2}
                        text={texts[2]}
                    />
                    <SradioButton
                        value={3}
<<<<<<< HEAD
                        text={texts[3]}
=======
                        text={texts[3]} 
>>>>>>> 88fb1fa1d64e49d3799b5b0401f7badcb158fe5c
                    />
                </RadioButton.Group>
                <StextBox
                    value={otherReason}
                    onChangeText={(value) => setOtherReason(value)}
                    disabled={!(value===3)}
<<<<<<< HEAD
                    placeholder="Enter the reason"
=======
                    placeholder="Enter the reason" 
>>>>>>> 88fb1fa1d64e49d3799b5b0401f7badcb158fe5c
                />
            </View>

            <View style={styles.btngrp}>
                <Sbutton
                    primary={true}
                    text="Confirm"
                    onPress={() => validateReason()}
                />
                <Sbutton
                    text="Cancel"
                    onPress={() => navigation.navigate(route.params.routeTo)}
                />
            </View>
        </View>
    )
}
<<<<<<< HEAD

export default Withdrawal;

=======
 
export default Withdrawal;


>>>>>>> 88fb1fa1d64e49d3799b5b0401f7badcb158fe5c
