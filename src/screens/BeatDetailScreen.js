import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const BeatDetailScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>BeatDetailScreen</Text>

      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 28.7041,
            longitude: 77.1025,
          }}
          title={'danger zone'}
          draggable
          onDragEnd={e => setMarkedLocation(e.nativeEvent.coordinate.latitude)}
          // description={marker.description}
        />
      </MapView>
    </View>
  );
};

export default BeatDetailScreen;

const styles = StyleSheet.create({});
