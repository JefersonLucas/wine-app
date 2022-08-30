import { NavigationContainer } from "@react-navigation/native";

import { WineRoutes } from "./wine.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <WineRoutes />
    </NavigationContainer>
  );
}
