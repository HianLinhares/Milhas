import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types'; // Ajuste o caminho conforme sua estrutura

type ResultsScreenProps = StackScreenProps<RootStackParamList, 'ResultsScreen'>;

export default function ResultsScreen({ route, navigation }: ResultsScreenProps) {
  const { origem, destino, dataIda } = route.params;

  return (
    <View>
      <Text>Origem: {origem}</Text>
      <Text>Destino: {destino}</Text>
      <Text>Data da ida: {dataIda}</Text>
    </View>
  );
}
