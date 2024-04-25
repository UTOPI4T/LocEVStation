import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import MapViewStyle from './MapViewStyle.json';

const AppMapView = () => {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        showsUserLocation={true}
        customMapStyle={MapViewStyle}
        />
    </View>
  )
}

export default AppMapView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})