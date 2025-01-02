// src/navigation/RootStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BeatListScreen from '../screens/BeatListScreen';
import BeatViewScreen from '../screens/BeatDetailScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="BeatList">
      <Stack.Screen
        name="BeatList"
        component={BeatListScreen}
        options={{title: 'Beat List'}}
      />
      <Stack.Screen
        name="BeatDetails"
        component={BeatViewScreen}
        options={{title: 'Beat View'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
