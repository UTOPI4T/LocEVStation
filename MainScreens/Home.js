import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppMapView from './Maps/AppMapView';
import HeaderOnMapView from './Maps/HeaderOnMapView'
// import { SignInButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:40}}>Map View Test</Text> */}
      <View style={styles.headContainer}>
        <HeaderOnMapView/>
      </View>
      <AppMapView/>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    // paddingHorizontal:5,
    backgroundColor:'pink'
  },
  headContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%'
  }


})