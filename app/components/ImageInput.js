import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function ImageInput({ imageUri }) {
  return (
    <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}   
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      width: 100,
      height: 100,
      overflow: "hidden",
  },
  image: {
      width: "100%",
      height: "100%",
  }
});

export default ImageInput;