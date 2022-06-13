import React, { useState } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { useTheme, Text } from 'react-native-paper'

import Sbutton from '../Sbutton'
import styles from './styles'

const DateTimePicker = ({date, setDate}) => {
    const { colors } = useTheme();
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <Sbutton 
                text="Select date and time"
                onPress={() => setOpen(true)}
            />
            <Text style={styles.text}>Selected : {date.toLocaleString()}</Text>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {setOpen(false)}}
                minuteInterval={15}
                textColor={colors.primary}
            />
        </View>
    )
}

export default DateTimePicker;