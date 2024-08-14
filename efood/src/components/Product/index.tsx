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

type Props = {
  id: number;
  title: string;
  description: string;
  preco: number;
  image: string;
  porcao: string;
};

const Product = ({ id, title, description, preco, image, porcao }: Props) => {
  const [modal, setModal] = useState(false);

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 157) + "...";
    }
  };

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <>
      <Container key={id}>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <p>{getDescription(description)}</p>
        <Buttom onClick={() => setModal(true)}>Mais detalhes</Buttom>
      </Container>

      {modal && (
        <Modal>
          <ModalContent>
            <Image src={image} alt={title} />
            <div>
              <Title>{title}</Title>
              <p>{description}</p>
              <p>Serve: {porcao}</p>
              <Buttom>Adicionar ao carrinho - {formatPrice(preco)}</Buttom>
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
