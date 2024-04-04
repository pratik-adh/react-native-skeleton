/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";
import { MainProvider, i18n } from "./essentials";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens";
import { ScreenTypes } from "./services";

export type RootStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name={ScreenTypes.HOMESCREEN} />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <MainProvider>
            <I18nextProvider i18n={i18n}>
              <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <Screens />
            </I18nextProvider>
          </MainProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
