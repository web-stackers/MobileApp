import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sbutton from '../../../../components/Sbutton';
import axios from 'axios';

// const OtherReasons = ({categories}) => {
//   const names = categories.map(item => {
//     return item.name;
//   });
//   return (
//     <View>
//       <Text>
//         {names}
//       </Text>
//     </View>
//   );
// };

const ComplaintsCategory = ({route, navigation}) => {
  const complaintBy = route.params.by;
  const id = route.params.id;
  const title = route.params.title;
  const jobId = route.params.jobId; //621341023987d49e1f22f7a8
  const categories = route.params.categories;

  const [complaintDescription, setComplaintDescription] = useState('');

  const providerCategoryDescription = [
    {
      id: 0,
      details:
        'This category is about consumer is not available in the given location at the given time. So the work is not yet completed according to the schedule.',
    },
    {
      id: 1,
      details:
        'This category is about consumer paid less than the accepted amount even though the work is finished according to the requirements.',
    },
    {
      id: 2,
      details:
        'This category is about consumer asked to do additional works rather than in the job request.',
    },
    {
      id: 3,
      details:
        'This category is to provide any additional complaints which are not included in the provided complaints categories. You can mention all your issues here.',
    },
  ];
  const consumerCategoryDescription = [
    {
      id: 0,
      details:
        'This category is about provider never came to the job on the requested date and time. Still the work is not yet completed.',
    },
    {
      id: 1,
      details:
        'This category is about provider is late for the work. The work has not completed according to the schedule.',
    },
    {
      id: 2,
      details:
        'This category is to provide all the problems related to the quality of the completed job. If you are not satisfied with the job quality you may mention them below briefly.',
    },
    {
      id: 3,
      details:
        'This category is about the payment issues. If the provider asked more money than the fixed price mentioned in the Quotation, you can mention here.',
    },
    {
      id: 4,
      details:
        'This category is to provide any additional complaints which are not included in the provided complaints categories. You can mention all your issues here.',
    },
  ];

  const displayDescription = () => {
    if (complaintBy === 'Consumer') {
      return consumerCategoryDescription;
    } else {
      return providerCategoryDescription;
    }
  };

  const categoryDescription = displayDescription()[id];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.content}>{categoryDescription.details}</Text>
      </View>
      {/* <OtherReasons categories={categories} /> */}
      <View style={styles.box}>
        <StextInput
          label="You may enter your specific queries here"
          value={complaintDescription}
          onChangeText={complaintDescription =>
            setComplaintDescription(complaintDescription)
          }
        />
      </View>
      <View style={styles.btngrp}>
        <Sbutton
          primary={true}
          text="Submit"
          onPress={() => {
            axios
              .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                by: complaintBy,
                category: title,
                description: complaintDescription,
              })
              .then(function (response) {
                navigation.navigate('Acknowledge');
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ComplaintsCategory;
