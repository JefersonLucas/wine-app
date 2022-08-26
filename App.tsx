import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
  Lato_300Light,
} from "@expo-google-fonts/lato";

import { Catalog } from "./src/screens/Catalog";

import { ThemeProvider } from "styled-components/native";
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
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Catalog />
    </ThemeProvider>
  );
}
