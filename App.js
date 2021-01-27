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
import ImageInputList from "./app/components/ImageInputList";



export default function App() {
  
  return <ListingEditScreen />

  
}

