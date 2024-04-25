import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { SignInButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:100}}>Home</Text>
      <View style={styles.boxSatu}>
        <Text> box 1</Text>
      </View>
      <View style={styles.boxDua}>
        <Text> box 2 </Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:30,
    paddingHorizontal:5,
    backgroundColor:'pink'
  }


})