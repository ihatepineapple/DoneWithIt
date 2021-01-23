import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from "./app/components/Card";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return <ViewImageScreen />
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });