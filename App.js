import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import ViewImageScreen from './app/screens/ViewImageScreen';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from "./app/components/AppPicker";


const categories =[
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
]

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker 
      selectedItem={category}
      onSelectItem={item => setCategory(item)}
      items={categories} placeholder="category" icon="apps"/>
      <AppTextInput placeholder="username" icon="email" />

    </Screen>
  
  
    )
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });