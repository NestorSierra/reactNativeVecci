import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppCard from "../components/AppCard";

function MainScreen() {
  return (
    <View style={styles.container}>
      <AppCard
        title="prueba"
        subTitle="Esto es una prueba"
        image={require("../assets/background.jpg")}
      ></AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default MainScreen;
