import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
  Lato_300Light,
} from "@expo-google-fonts/lato";

import { Routes } from "./src/routes";

import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" translucent backgroundColor="transparent" />
      <Routes />
      <Toast />
    </ThemeProvider>
  );
}
