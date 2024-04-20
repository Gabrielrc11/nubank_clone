import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "./src/screens/Home";
import { Configs } from "./src/screens/Configs"

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Configs"
          component={Configs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}