import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/welcomeScreens';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
   <>
   
   <NavigationContainer>
    <WelcomeScreen></WelcomeScreen>
    </NavigationContainer>
   
   
   </>
  )
}