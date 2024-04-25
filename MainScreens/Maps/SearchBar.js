import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchBar = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        style={styles.bar}
        placeholder='Search the electric vehicle station...'
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
        }}
        query={{
            key: 'AIzaSyAMDYIY5eIj9k2qH9X5mEXUKzKO3zyJLZw',
            language: 'en',
        }}
    />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    bar: {
        position:'relative'
    }
})