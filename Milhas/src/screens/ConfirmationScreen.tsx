import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

const ConfirmationScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Compra confirmada!</Text>
      <Button title="Voltar à tela inicial" onPress={() => navigation.replace('SearchScreen')} />
    </View>
  );
};

export default ConfirmationScreen;
