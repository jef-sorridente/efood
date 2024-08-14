import { Link, useParams } from "react-router-dom";
import Banner from "../Banner";
import Header from "../Header";
import Product from "../Product";
import { ContainerProducts, Mensage } from "./styles";
import { Restaurantes } from "../../Pages/Home";
import { useEffect, useState } from "react";

const ProductIList = () => {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState<Restaurantes>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res));
  }, [id]);

  if (!restaurante) {
    return (
      <Mensage>
        <p>Desculpe mas não temos nenhum produto aqui!</p>
        <Link to="/">Voltar a página inicial</Link>
      </Mensage>
    );
  }

  return (
    <div>
      <Header page="product" />

      <>
        <Banner
          title={restaurante.titulo}
          category={restaurante.tipo}
          image={restaurante.capa}
        />
        <div className="container">
          <ContainerProducts>
            {restaurante.cardapio.map((item) => (
              <li key={item.id}>
                <Product
                  id={item.id}
                  title={item.nome}
                  description={item.descricao}
                  image={item.foto}
                  porcao={item.porcao}
                  preco={item.preco}
                />
              </li>
            ))}
          </ContainerProducts>
        </div>
      </>
    </div>
  );
};

export default ProductIList;

{
  /* {products.items.map((prod) => (
  <Product
    key={prod.id}
    id={prod.id}
    title={prod.title}
    description={prod.description}
  />
))} */
}
