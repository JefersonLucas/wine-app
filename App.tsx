import { StatusBar } from "expo-status-bar";

import { Catalog } from "./src/screens/Catalog";
import { Product } from "./src/screens/Product";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Product />
    </ThemeProvider>
  );
}
