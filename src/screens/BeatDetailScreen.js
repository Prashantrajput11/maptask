import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
import {ClusterMap} from 'react-native-cluster-map';

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};
const BeatDetailScreen = () => {
  const mapRef = useRef();
  const {beatData} = useRoute()?.params;

  const {stores} = beatData;

  const animateToRegion = () => {
    let region = {
      latitude: 42.5,
      longitude: 15.2,
      latitudeDelta: 7.5,
      longitudeDelta: 7.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.header}>BeatDetailScreen</Text>
      {/* <MapView
        provider="google"
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        style={{flex: 1}}>
        {stores.map(store => (
          <Marker
            key={store.id}
            coordinate={{
              latitude: 52.5,
              longitude: 19.2,
            }}
            title={store.name}
            description={store.address}
          />
        ))}
      </MapView> */}
      <ClusterMap
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 37.78725, longitude: -122.434}} />
        <Marker coordinate={{latitude: 37.789, longitude: -122.431}} />
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} />
      </ClusterMap>
      ;
    </View>
  );
};

export default BeatDetailScreen;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
});
