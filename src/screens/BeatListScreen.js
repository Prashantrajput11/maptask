import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const BeatListScreen = ({navigation}) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('BeatDetails')}>
        <Text>Next</Text>
      </Pressable>
      <Text>BeatListScreen</Text>
    </View>
  );
};

export default BeatListScreen;

const styles = StyleSheet.create({});
