import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

type RootStackParamList = {
  Login: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/adaptive-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo a LinKar!</Text>
      <Text style={styles.subtitle}>
        Conectando você aos seus destinos de forma rápida, segura e sustentável
      </Text>
      <Button
        title="Começar"
        onPress={() => navigation.navigate('Login')}
        color="#FFC107"
      />
    </View>
  );
}
