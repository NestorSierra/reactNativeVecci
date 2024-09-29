import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import { AppLoading } from "expo";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: { width: 100, height: 100 },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
  tagline: { fontSize: 25, fontWeight: "bold", marginTop: 10 },
});

export default WelcomeScreen;
