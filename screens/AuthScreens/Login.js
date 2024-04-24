import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();

  const {startOAuthFlow} = useOAuth({ strategy:'oauth_google'})
  const onPress=async()=> {
    try {
      const { createdSessionId, signIn, signUp, setActive  } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session : createdSessionId})

      }else {

      }
    }catch (err) {
      console.error('Oauth error', err);
    }
  }
  return (
    <View style={styles.loginContainer}>
      <View style={styles.btnText}> 
        <TouchableOpacity onPress={onPress}>
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