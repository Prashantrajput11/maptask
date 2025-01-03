// Example: Importing beats in BeatListScreen.js

import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {beats} from '../constant';

const BeatListScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.beatItem}
      onPress={() => navigation.navigate('BeatDetails', {beatData: item})}>
      <Text style={styles.beatName}>{item.name}</Text>
      <Text style={styles.storeCount}>{item.stores.length} Stores</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={beats}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  listContainer: {padding: 16},
  beatItem: {
    padding: 20,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  beatName: {fontSize: 18, fontWeight: 'bold'},
  storeCount: {fontSize: 14, color: '#555', marginTop: 4},
});

export default BeatListScreen;
