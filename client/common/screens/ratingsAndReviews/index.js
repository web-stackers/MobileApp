import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {TextInput} from 'react-native-paper';
import {Rating} from 'react-native-ratings';

const RatingsAndReviews = ({navigation}) => {
  //   const jobId = navigation.getParam('jobId');
  //   const ratingsBy = navigation.getParam('by');

  const ratingsBy = 'Consumer';
  const jobId = '621341023987d49e1f22f7a8';

  const [job, setJob] = useState([]);
  const [name, setName] = useState([]);
  const [reviews, setReviews] = useState('');
  const [starRating, setStarRating] = useState(0);

  // Fetch particular job
  const getJob = () => {
    axios
      .get(`http://10.0.2.2:5000/job/${jobId}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Fetch user name
  const getName = () => {
    if (ratingsBy === 'Consumer') {
      // const id = job.providerId;
      const id = '62a06e2bafddf297d7b90069';

      axios
        .get(`http://10.0.2.2:5000/provider/get/provider/name/${id}`)
        .then(response => {
          setName(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // const id = job.consumerId;
      const id = '62132b7bc4afd22e5fc49677';
      axios
        .get(`http://10.0.2.2:5000/consumer/get/consumer/name/${id}`)
        .then(response => {
          setName(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getJob();
    getName();
  }, []);

  const handleSubmit = () => {
    if (starRating === 0 && reviews === '') {
      Alert.alert(
        'Both ratings and reviews are empty',
        'Either provide ratings or reviews and press rate now or press may be later.',
      );
    } else if (reviews === '') {
      axios
        .patch(`http://10.0.2.2:5000/job/ratingAndReview/${jobId}`, {
          by: ratingsBy,
          rating: starRating,
        })
        .then(function (response) {
          navigation.navigate('Home');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (starRating === 0) {
      axios
        .patch(`http://10.0.2.2:5000/job/ratingAndReview/${jobId}`, {
          by: ratingsBy,
          review: reviews,
         
        })
        .then(function (response) {
          navigation.navigate('Home');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .patch(`http://10.0.2.2:5000/job/ratingAndReview/${jobId}`, {
          by: ratingsBy,
          rating: starRating,
          review: reviews,
        })
        .then(function (response) {
          navigation.navigate('Home');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.outBox}>
        <Text style={styles.topContent}>
          Please Rate {name.fName}
        </Text>
        <View style={styles.inBox}>
          <Text style={styles.middleContent}>How was the service?</Text>
          <View style={styles.starView}>
            <Rating
              type="custom"
              ratingColor="#652C9E"
              ratingBackgroundColor="rgba(137, 137, 137, 0.5)"
              imageSize={50}
              startingValue={0}
              onFinishRating={starRating => setStarRating(starRating)}
              tintColor="rgba(52, 52, 52, 0.7)"
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              label="Enter Reviews Here"
              value={reviews}
              onChangeText={reviews => setReviews(reviews)}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="  Rate Now  "
              color="#652C9E"
              onPress={handleSubmit}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <Button
            title=" May be later "
            color="rgba(52, 52, 52, 0.8)"
            onPress={() => navigation.push('Home')}
          />
        </View>
      </View>
    </View>
  );
};

export default RatingsAndReviews;
