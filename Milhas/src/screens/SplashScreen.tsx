import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type SplashScreenProps = StackScreenProps<RootStackParamList, 'SplashScreen'>;

export default function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    // Simula carregamento, depois navega para SearchScreen
    const timeout = setTimeout(() => {
      navigation.replace('SearchScreen');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>✈️ MileScanner</Text>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
});
