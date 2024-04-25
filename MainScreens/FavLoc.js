import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavLoc = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Saved Location</Text>
      <View style={styles.boxSatu}>
        <Text> box 1</Text>
      </View>
      <View style={styles.boxDua}>
        <Text> box 2 </Text>
      </View>
    </View>
  )
}

export default FavLoc

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    paddingHorizontal:5,
    backgroundColor:'grey'
  },
  boxSatu:{
    flex:1,
    backgroundColor:'pink',
    borderRadius:20,
    margin:5,
  },
  boxDua:{
    flex:1,
    backgroundColor:'lightblue',
    borderRadius:20,
    margin:5,
  }
})