import { Cotacao } from '../types/types'; // Importando o tipo Cotacao

export const fetchCotas = async (origem: string, destino: string, dataIda: string): Promise<Cotacao[]> => {
  // Exemplo de resposta simulada de uma API
  return [
    { id: 1, companhia: 'LATAM', preco: '10.000 milhas', horarios: '10:00 - 15:00', regras: 'Sem alteração' },
    { id: 2, companhia: 'Gol', preco: '8.000 milhas', horarios: '12:00 - 17:00', regras: 'Alterações permitidas' },
    { id: 3, companhia: 'Azul', preco: '9.500 milhas', horarios: '14:00 - 19:00', regras: 'Somente ida' },
  ];
};
