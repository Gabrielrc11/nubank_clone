import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "./src/screens/Home";
import { Configs } from "./src/screens/Configs"
import { EditName } from "./src/screens/EditName"
import { EditMoney } from "./src/screens/EditMoney"

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
          name="EditName"
          component={EditName}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditMoney"
          component={EditMoney}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}