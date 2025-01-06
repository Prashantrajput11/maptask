import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ClusterMap} from 'react-native-cluster-map';
import {Marker} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';

// initail region for the map rendering
const INITIAL_REGION = {
  latitude: 28.4595,
  longitude: 77.0266,
  latitudeDelta: 1.5,
  longitudeDelta: 1.5,
};

const BeatDetailScreen = () => {
  const {beatData} = useRoute()?.params;
  const {stores} = beatData;

  const renderCustomClusterMarker = cluster => {
    const {pointCount} = cluster;
    return <MyCluster count={pointCount} />;
  };

  const MyCluster = ({count}) => (
    <View style={styles.cluster}>
      <Text style={styles.clusterText}>{count}</Text>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <Text style={styles.header}>BeatDetailScreen</Text>
      <ClusterMap
        renderClusterMarker={renderCustomClusterMarker}
        provider="google"
        region={INITIAL_REGION}
        style={{flex: 1}}>
        {stores.map(store =>
          store.latitude && store.longitude ? (
            <Marker
              key={store.id}
              coordinate={{
                latitude: store.latitude,
                longitude: store.longitude,
              }}
              title={store.name}
              description={store.address}
            />
          ) : null,
        )}
      </ClusterMap>
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
  cluster: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clusterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
