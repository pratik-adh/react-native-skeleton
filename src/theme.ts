import { StyleSheet } from "react-native";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  red: "#EB0A1E",
  shadowedWhite: "#f2f2f2",
  smokeyWhite: "#F5F5F5",
  blackShade1: "#EEEEEE",
  lighterShade: "#d4d4d4",
  blackShade2: "#CCCCCC",
  blackShade3: "#3A3A3A",
  labelColor: "#484848",
  lightBlack: "#10101080",
  lightGrey: "#A3A3A3",
  shoadowedBackground: "#dedddc",
};

const typography = StyleSheet.create({
  normalTextWithBoldSize: {
    fontWeight: "normal",
    fontSize: 16,
  },
  normalTextWithNormalSize: {
    fontWeight: "normal",
    fontSize: 16,
  },
  smallTextWithNormalSize: {
    fontWeight: "normal",
    fontSize: 14,
  },
  smallTextWithBoldSize: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export const THEME = {
  colors,
  typography,
};
