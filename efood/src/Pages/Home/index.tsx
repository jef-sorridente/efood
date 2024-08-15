import RestaurantList from "../../components/RestaurantList";
import Header from "../../components/Header";
import { useGetRestaurantesQuery } from "../../services/api";

export interface Cardapio {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export type Restaurantes = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery();

  if (restaurantes) {
    return (
      <>
        <Header page="home" />
        <RestaurantList restaurantes={restaurantes} />
      </>
    );
  }
  return (
    <>
      <Header page="home" />
      <h4>Carregando...</h4>
    </>
  );
};

export default Home;
