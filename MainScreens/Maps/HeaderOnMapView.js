import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function HeaderOnMapView() {
  const {user}=useUser();
  return (
    <View>
      <View style={styles.container}>
      <Image source={{uri:user?.imageUrl}}
        style={{width:45,height:45, borderRadius:50}}
      />
      <Text style={styles.appTitle}>Header Title</Text>
      </View>
      <View style={{ marginBottom:10,}}>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'auto'
  }, 
  appTitle: {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:83,
    backgroundColor:'lightblue',
    padding:10,
    borderRadius:5
   
  }
})