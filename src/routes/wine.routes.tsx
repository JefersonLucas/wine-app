import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Catalog } from "../screens/Catalog";
import { Product } from "../screens/Product";

export function WineRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="catalog" component={Catalog} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
