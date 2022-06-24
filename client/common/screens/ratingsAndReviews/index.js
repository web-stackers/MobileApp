import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {TextInput} from 'react-native-paper';
import {Rating} from 'react-native-ratings';

const RatingsAndReviews = ({navigation}) => {
  // const {id, ratingsBy} = route.params;

  const ratingsBy = 'Consumer';
  const jobId = '62b5040441de127304ee7c53';

  const [reviews, setReviews] = useState('');
  const [starRating, setStarRating] = useState(0);

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
          if (ratingsBy === 'Consumer') {
            navigation.navigate('Job Completed Consumer');
          } else {
            navigation.navigate('Job Completed Provider');
          }
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
          if (ratingsBy === 'Consumer') {
            navigation.navigate('Job Completed Consumer');
          } else {
            navigation.navigate('Job Completed Provider');
          }
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
          if (ratingsBy === 'Consumer') {
            navigation.navigate('Job Completed Consumer');
          } else {
            navigation.navigate('Job Completed Provider');
          }
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
          Please Rate the {ratingsBy === 'Consumer' ? 'Provider' : 'Consumer'}
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
              multiline={true}
              keyboardType="default"
              returnKeyType="done"
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
            onPress={() => {
              if (ratingsBy === 'Consumer') {
                navigation.navigate('Job Completed Consumer');
              } else {
                navigation.navigate('Job Completed Provider');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default RatingsAndReviews;
