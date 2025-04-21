export interface Cotacao {
  id: number;
  companhia: string;
  preco: string;
  horarios: string;
  regras: string;
}

export type RootStackParamList = {
  SplashScreen: undefined;
  SearchScreen: undefined;
  ResultsScreen: { origem: string; destino: string; dataIda: string };
  DetailsScreen: { cotacao: Cotacao };
  ConfirmationScreen: undefined;
};
