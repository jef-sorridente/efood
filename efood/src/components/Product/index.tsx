import { useState } from "react";
import {
  Container,
  Image,
  Title,
  Buttom,
  Modal,
  ModalContent,
  Close,
} from "./styles";

import closeIcon from "../../assets/images/close.png";
import { useDispatch } from "react-redux";
// import { add } from "../../store/reducers/cart";
import { Cardapio } from "../../Pages/Home";
import { add, open } from "../../store/reducers/cart";
import { formatPrice } from "../../utils/formatPrice";

type Props = {
  cardapio: Cardapio;
};

const Product = ({ cardapio }: Props) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(cardapio));
    dispatch(open());
  };

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 157) + "...";
    }
  };

  return (
    <>
      <Container key={cardapio.id}>
        <Image src={cardapio.foto} alt={cardapio.nome} />
        <Title>{cardapio.nome}</Title>
        <p>{getDescription(cardapio.descricao)}</p>
        <Buttom onClick={() => setModal(true)}>Mais detalhes</Buttom>
      </Container>

      {modal && (
        <Modal>
          <ModalContent>
            <Image src={cardapio.foto} alt={cardapio.nome} />
            <div>
              <Title>{cardapio.nome}</Title>
              <p>{cardapio.descricao}</p>
              <p>Serve: {cardapio.porcao}</p>
              <Buttom onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(cardapio.preco)}
              </Buttom>
            </div>
            <Close
              src={closeIcon}
              alt="Fechar"
              onClick={() => setModal(false)}
            />
          </ModalContent>
          <div className="overlay" onClick={() => setModal(false)}></div>
        </Modal>
      )}
    </>
  );
};

export default Product;
