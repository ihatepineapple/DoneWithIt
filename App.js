import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from "react";
import ViewImageScreen from './app/screens/ViewImageScreen';
import { Text, TextInput, View, Image } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components//ImageInput";
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";



export default function App() {
  const [imageUri, setImageUri] = useState()

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("You need to enable permission to access the library")
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log("Error while reading an image")
    }
  }

  useEffect(() => {
    requestPermission();
  }, [])
 
  return <Screen>
    <AppButton title="Select Image" onPress={selectImage} />
    <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    <ImageInput imageUri={imageUri} />
  </Screen>

  
}

