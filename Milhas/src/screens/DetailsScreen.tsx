import React from 'react';
import { View, Text, Button } from 'react-native';

type Cotacao = {
  companhia: string;
  horarios: string;
  regras: string;
};

type Props = {
  route: any;
  navigation: any;
};

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { cotacao }: { cotacao: Cotacao } = route.params;

  return (
    <View>
      <Text>{cotacao.companhia}</Text>
      <Text>{cotacao.horarios}</Text>
      <Text>{cotacao.regras}</Text>
      <Button title="Confirmar compra" onPress={() => navigation.navigate('ConfirmationScreen')} />
    </View>
  );
};

export default DetailsScreen;
