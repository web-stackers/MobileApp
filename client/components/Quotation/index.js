import React from "react";
import {View, Text} from 'react-native';
import dateFormat from "dateformat";

import styles from "./styles";

const Quotation = ({completeTime, amount, job}) => {

    return (
        <View style={styles.quotationDoc}>
            <Text style={styles.title}>Quotation{"\n"}</Text>
            <Text style={styles.detail}>
                <Text>Description :{"\n"}</Text>
                <Text>{job.description}{"\n"}</Text>
                <Text>Requested Date :{"\n"}</Text>
                <Text>{dateFormat(job.requestedTime, "fullDate")}{"\n"}</Text>
                <Text>Requested Time :{"\n"}</Text>
                <Text>{dateFormat(job.requestedTime, "hh:MM TT")}{"\n"}</Text>
                <Text>Estimated Time to complete :{"\n"}</Text>
                <Text>{dateFormat(completeTime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}{"\n"}</Text>
                <Text>Estimated amount for the job :{"\n"}</Text>
                <Text>Rs {amount}{"\n"}</Text>
            </Text>
        </View>
    )
}

export default Quotation;