import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import MapView, { Marker } from 'react-native-maps';

import MapViewStyle from './MapViewStyle.json';
import { UserLocation } from '../../hooks/userLocation';

const AppMapView = () => {
  const {location,setLocation}=useContext(UserLocation);

  return  location?.latitude&& (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        showsUserLocation={true}
        customMapStyle={MapViewStyle}
        region={{
          latitude:location?.latitude,
          longitude:location?.longitude,
          latitudeDelta:0.0442,
          longitudeDelta:0.0421,
        }}
        
      > 
        <Marker
          
          coordinate={{
            latitude:location?.latitude,
            longitude:location?.longitude,
            
          }}
          title={'Current Location'}
        >
          <Image source={require('../../assets/above-angle-car.png')} 
            style={{width:30,height:30}} />
        </Marker>
      
      
      </MapView>
        
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