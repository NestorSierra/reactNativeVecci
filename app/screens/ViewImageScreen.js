import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  image: { width: "100%", height: "100%" },
});

export default ViewImageScreen;
