import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import StextInput from '../../../../components/FormComponents/StextInput';
import Sbutton from '../../../../components/Sbutton';
import axios from 'axios';

const OtherReasons = ({categories, selectedItems, setSelectedItems}) => {
  const handleOnPress = item => {
    if (selectedItems.includes(item)) {
      const newListItem = selectedItems.filter(name => name !== item);
      return setSelectedItems(newListItem);
    }
    setSelectedItems([...selectedItems, item]);
  };

  const getSelected = item => {
    return selectedItems.includes(item);
  };

  return categories.map((category, index) => {
    if (category.name !== 'Other issues' && category.id !== 0) {
      return (
        <View key={index} style={styles.categories}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => handleOnPress(category.name)}>
            <View style={{padding: 10}}>
              <Text style={styles.touchableContent}>{category.name}</Text>
            </View>

            <View style={[getSelected(category.name) && styles.overlay]} />
          </TouchableOpacity>
        </View>
      );
    }
  });
};

const ComplaintsCategory = ({route, navigation}) => {
  const complaintBy = route.params.by;
  const id = route.params.id;
  const title = route.params.title;
  const jobId = route.params.jobId;
  const categories = route.params.categories;

  const [complaintDescription, setComplaintDescription] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

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
        'This category is to provide any additional complaints which are not included in the provided complaints categories. You can select more than one complaint category from the below options or can mention all your issues in the below provided space.',
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
        'This category is to provide any additional complaints which are not included in the provided complaints categories. You can select more than one complaint category from the below options or can mention all your issues in the below provided space.',
    },
  ];

  const displayDescription = () => {
    if (complaintBy === 'consumer') {
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
      {title === 'Other issues' ? (
        <OtherReasons
          categories={categories}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ) : null}
      <View style={styles.box}>
        <StextInput
          label="You may enter your specific queries here"
          value={complaintDescription}
          onChangeText={complaintDescription =>
            setComplaintDescription(complaintDescription)
          }
        />
      </View>
      <View style={styles.btn}>
        <Sbutton
          primary={true}
          text="Submit"
          onPress={() => {
            if (title !== 'Other issues') {
              if (complaintDescription === '') {
                axios
                  .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                    by: complaintBy,
                    category: title,
                  })
                  .then(function (response) {
                    navigation.navigate('Complaint acknowledge', {
                      by: complaintBy,
                    });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              } else {
                axios
                  .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                    by: complaintBy,
                    category: title,
                    description: complaintDescription,
                  })
                  .then(function (response) {
                    navigation.navigate('Complaint acknowledge', {
                      by: complaintBy,
                    });
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }
            } else {
              if (Object.keys(selectedItems).length === 0) {
                if (complaintDescription === '') {
                  axios
                    .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                      by: complaintBy,
                      category: title,
                    })
                    .then(function (response) {
                      navigation.navigate('Complaint acknowledge', {
                        by: complaintBy,
                      });
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                } else {
                  axios
                    .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                      by: complaintBy,
                      category: title,
                      description: complaintDescription,
                    })
                    .then(function (response) {
                      navigation.navigate('Complaint acknowledge', {
                        by: complaintBy,
                      });
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
              } else {
                if (complaintDescription === '') {
                  axios
                    .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                      by: complaintBy,
                      category: title,
                      othercategory: selectedItems.toString(),
                    })
                    .then(function (response) {
                      navigation.navigate('Complaint acknowledge', {
                        by: complaintBy,
                      });
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                } else {
                  axios
                    .patch(`http://10.0.2.2:5000/job/complaint/${jobId}`, {
                      by: complaintBy,
                      category: title,
                      othercategory: selectedItems.toString(),
                      description: complaintDescription,
                    })
                    .then(function (response) {
                      navigation.navigate('Complaint acknowledge', {
                        by: complaintBy,
                      });
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }
              }
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ComplaintsCategory;
