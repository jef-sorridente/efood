import { Link, useParams } from "react-router-dom";
import Products from "../../models/Products";
import Banner from "../Banner";
import Header from "../Header";
import Product from "../Product";
import { ContainerProducts, Mensage } from "./styles";

export type Props = {
  products: Products[];
};

const ProductIList = ({ products }: Props) => {
  const { id } = useParams();

  const idProduct = products.find((prod) => prod.id.toString() === id);

  return (
    <div>
      <Header page="product" />

      {idProduct && (
        <>
          <Banner title={idProduct.title} category={idProduct.category} />
          <div className="container">
            {idProduct.items.length > 0 ? (
              <ContainerProducts>
                {idProduct.items.map((item) => (
                  <Product
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                ))}
              </ContainerProducts>
            ) : (
              <Mensage>
                <p>Desculpe mas não temos nenhum produto aqui!</p>
                <Link to="/">Voltar a página inicial</Link>
              </Mensage>
            )}
          </div>
        </>
      )}
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
