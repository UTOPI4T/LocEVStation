import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/AuthScreens/Login';
import { ClerkProvider } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey={'pk_test_c3VpdGFibGUtbWVlcmthdC01MC5jbGVyay5hY2NvdW50cy5kZXYk'}>
      <View style={styles.container}>
        <Login/>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:5,
  },
});
