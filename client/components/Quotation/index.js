import React from "react";
import {View, Text, ScrollView} from 'react-native';
import dateFormat from "dateformat";

import styles from "./styles";

const DetailField = ({field, detail}) => {
    return (
      <View style={styles.detailField}>
        <Text style={styles.field}>{field}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    )
  }

const Quotation = ({completeTime, amount, job}) => {

    return (
        <ScrollView style={styles.quotationDoc}>
            <Text style={styles.title}>Quotation{"\n"}</Text>
            <DetailField
                field="Description"
                detail={job.description}
            />
            <DetailField
                field="Requested Date"
                detail={dateFormat(job.requestedTime, "fullDate")}
            />
            <DetailField
                field="Requested Time"
                detail={dateFormat(job.requestedTime, "hh:MM TT")}
            />
            <DetailField
                field="Estimated Time to complete"
                detail={dateFormat(completeTime, "dddd, mmmm dS, yyyy, h:MM TT")}
            />
            <DetailField
                field="Estimated amount"
                detail={amount}
            />
        </ScrollView>
    )
}

export default Quotation;