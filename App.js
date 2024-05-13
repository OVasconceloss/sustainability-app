import HomeScreen from "./src/screens/Home/homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import QuizzScreen from "./src/screens/Quizz/quizzScreen";
import ProfileScreen from "./src/screens/Profile/profileScreen";
import NewsScreen from "./src/screens/News/newsScreen";
import SettingsScreen from "./src/screens/Settings/settingsScreen";
import ResultScreen from "./src/screens/Quizz/quizzResultScreen";
import QuestionsScreen from "./src/screens/Quizz/questionsScreen";
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
        <Stack.Screen
          name="Quizz"
          component={QuizzScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};