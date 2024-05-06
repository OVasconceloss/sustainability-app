import HomeScreen from "./src/screens/Home/homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./src/screens/Profile/profileScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from "./src/screens/Settings/settingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}  
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};