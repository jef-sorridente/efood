import { useEffect, useState } from "react";
import RestaurantList from "../../components/RestaurantList";
import Header from "../../components/Header";

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
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  console.log(restaurantes);

  return (
    <>
      <Header page="home" />
      <RestaurantList restaurantes={restaurantes} />
    </>
  );
};

export default Home;
