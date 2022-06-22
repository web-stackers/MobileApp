import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/Chat';

const ChatStack = createNativeStackNavigator();

const ChatStackScreen = () => (
  <ChatStack.Navigator>
    <ChatStack.Screen name="Chat" component={Chat} />
  </ChatStack.Navigator>
);

export default ChatStackScreen;
