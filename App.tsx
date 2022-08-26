import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

import { Product } from "./src/screens/Product";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Product />
    </ThemeProvider>
  );
}
