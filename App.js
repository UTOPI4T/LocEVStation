// React Native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Components or Files
import LoginPage from './screens/AuthScreens/Login';
import BottomTabNav from './screens/Navigations/BottomTabNav';
import { UserLocation } from './hooks/userLocation';

// Complicated import
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import * as Location from 'expo-location';


const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <ClerkProvider 
      tokenCache={tokenCache}
      publishableKey={'pk_test_c3VpdGFibGUtbWVlcmthdC01MC5jbGVyay5hY2NvdW50cy5kZXYk'}  >
      <UserLocation.Provider
       value={{location,setLocation}}>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <BottomTabNav/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginPage/>
        </SignedOut>
        
        <StatusBar style="auto" />
      </View>
      </UserLocation.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding:5,
  },
});
