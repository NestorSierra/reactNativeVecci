import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Image } from "react-native-expo-image-cache";

function AppCard({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
          uri={imageUrl}
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default AppCard;
