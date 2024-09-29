import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "../components/AppText";

function TextScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>Hello React Native</AppText>
    </View>
  );
}

export default TextScreen;
