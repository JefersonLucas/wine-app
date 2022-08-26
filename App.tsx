import { StatusBar } from "expo-status-bar";
import { Catalog } from "./src/screens/Catalog";

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Catalog />
    </>
  );
}
