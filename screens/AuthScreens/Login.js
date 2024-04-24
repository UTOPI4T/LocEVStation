import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.btnText}> 
        <TouchableOpacity>
          <Text style={{
             backgroundColor:'#505020',
             color:'white',
             padding:20,
             margin:5,
             textAlign:'center' 
          }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  loginContainer:{
    flex:1,
    backgroundColor:'#808020'
  },
  btnText: {
    marginTop:50,
   
  }

})