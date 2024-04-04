import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>{"HomeScreen"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export { HomeScreen };
