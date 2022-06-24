import React, {useState, useEffect} from 'react';
import {Text, ScrollView, View, TextInput, Alert} from 'react-native';
import Pusher from 'pusher-js/react-native';
import styles from './styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = ({route}) => {
  // const {JAID, sendBy, state} = route.params;

  const JAID = '62b5040441de127304ee7c55';
  const sendBy = 'Consumer';
  const state = 'Request Pending';
  // const state = 'Job completed';

  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    axios.get(`http://10.0.2.2:5000/chat/${JAID}`).then(response => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher('830065486460bbe58d2f', {
      cluster: 'eu',
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', newMessage => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  const display = () => {
    return messages.map((message, index) => {
      return (
        <View
          key={index}
          style={[
            message.arisedBy === sendBy
              ? styles.messageSender
              : styles.messageReceiver,
          ]}>
          <Text style={styles.message}>{message.message}</Text>
          <Text style={styles.timeStamp}>{message.timestamp}</Text>
        </View>
      );
    });
  };

  const sendNewMessage = () => {
    axios.post('http://10.0.2.2:5000/chat', {
      jobAssignmentId: JAID,
      message: newMsg,
      timestamp: new Date().toLocaleString(),
      arisedBy: sendBy,
    });

    setNewMsg('');
  };

  return (
    <View style={styles.container}>
      <ScrollView>{display()}</ScrollView>
      {state !== 'Job completed' ? (
        <View style={styles.submit}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            multiline={true}
            keyboardType="default"
            returnKeyType="done"
            blurOnSubmit={true}
            value={newMsg}
            onChangeText={newMsg => setNewMsg(newMsg)}
          />
          <View style={styles.buttonView}>
            <Icon.Button
              onPress={() => {
                sendNewMessage();
              }}
              backgroundColor="white"
              name="send"
              color="black"
              borderRadius={40}
              size={30}
            />
          </View>
        </View>
      ) : (
        <View style={styles.submit}>
          <TextInput
            style={styles.input}
            placeholder="You cannot send messages"
            editable={false}
            value={newMsg}
          />
          <View style={styles.buttonView}>
            <Icon.Button
              backgroundColor="white"
              name="send"
              color="black"
              borderRadius={40}
              size={30}
              onPress={() => {
                Alert.alert('Job has completed. You cannot send messages');
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Chat;
