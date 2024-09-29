import React from "react";

import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.danger,
  },
});

export default AppText;
