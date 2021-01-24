import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import AppText from "./AppText";

import colors from "../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subtitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
          </View>
      </TouchableHighlight>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer:{
    marginLeft: 10,
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
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
