import React from 'react';
import { View, Image, Alert } from 'react-native';
import {RadioButton, Text, TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import axios from 'axios';

import styles from './styles';
import Sbutton from '../../../components/Sbutton';
import SradioButton from '../../../components/SradioButton';

const Withdrawal = ({navigation, route}) => {
    const {colors} = useTheme();
    const [value, setValue] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [otherReason, setOtherReason] = React.useState('');
    const {JAID} = route.params;

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
            axios.patch(`http://10.0.2.2:5000/jobAssignment/withdrawlPending/${JAID}`, {
                arisedBy: route.params.arisedBy,
                reason: value===3? otherReason: reason,
            })
            .then((response) => {
                navigation.push('Acknowledgement', {
                  title: 'Withdrawal request sent !',
                  subtitle: 'Withdrawal request under review. You will receive an email of the results.',
                  routeTo: 'Job History'
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
                    {value===3 && <TextInput
                        value={otherReason}
                        onChangeText={(value) => setOtherReason(value)}
                        mode="outlined"
                        multiline={true}
                        theme={{ roundness: 6 }} 
                        outlineColor="#797D7F"
                        activeOutlineColor={colors.primary}
                        style={styles.input}
                        placeholder="Enter the reason" 
                        disabled={!(value===3)}
                    />}
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
                        text={texts[3]} 
                    />
                </RadioButton.Group>
                
            </View>

            <View style={styles.btngrp}>
                <Sbutton
                    primary={true}
                    text="Confirm"
                    onPress={() => validateReason()}
                />
                <Sbutton
                    text="Cancel"
                    onPress={() => navigation.pop(1)}
                />
            </View>
        </View>
    )
}
 
export default Withdrawal;


