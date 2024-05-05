import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "./src/screens/Home";
import { Configs } from "./src/screens/Configs"
import { Cota } from "./src/screens/Cota"

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Configs"
          component={Configs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cota"
          component={Cota}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}