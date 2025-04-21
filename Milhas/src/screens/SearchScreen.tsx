import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

type Props = {
  navigation: any;
};

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [dataIda, setDataIda] = useState('');

  const buscarCotas = () => {
    navigation.navigate('ResultsScreen', { origem, destino, dataIda });
  };

  return (
    <View>
      <TextInput
        placeholder="Origem"
        value={origem}
        onChangeText={setOrigem}
      />
      <TextInput
        placeholder="Destino"
        value={destino}
        onChangeText={setDestino}
      />
      <TextInput
        placeholder="Data de Ida"
        value={dataIda}
        onChangeText={setDataIda}
      />
      <Button title="Buscar" onPress={buscarCotas} />
    </View>
  );
};

export default SearchScreen;
