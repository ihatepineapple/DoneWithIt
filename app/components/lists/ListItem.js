import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({ title, subtitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
              {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
            </View>
            <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.medium}
                />
          </View>
          
      </TouchableHighlight>

    </Swipeable>


    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer:{
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
