import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

import { Rootreducer } from "../../store";
import { useState } from "react";
import { close } from "../../store/reducers/checkout";

import * as S from "./styles";

// import * as Yup from "yup";

const Checkout = () => {
  const { items } = useSelector((state: Rootreducer) => state.cart);
  const { isOpen } = useSelector((state: Rootreducer) => state.checkout);
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [isOpenConfirmation, setIsOpenConfirmation] = useState(false);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((accum, currentValue) => {
      return (accum += currentValue.preco!);
    }, 0);
  };

  const closeCheckout = () => {
    dispatch(close());
  };

  const openPayment = () => {
    setIsOpenPayment(true);
  };

  const closePayment = () => {
    setIsOpenPayment(false);
  };

  const openConfirmation = () => {
    setIsOpenConfirmation(true);
  };

  const closeConfirmation = () => {
    dispatch(close());
  };

  return (
    <S.Container className={isOpen ? "is-open" : ""}>
      <S.Form className={isOpenPayment ? "is-close" : "is-open"}>
        <p className="title">Entrega</p>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input type="text" id="fullName" name="fullName" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address" />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" name="city" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" name="cep" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="houseNumber">Número</label>
            <input type="text" id="houseNumber" name="houseNumber" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="houseNumber">Complemento (opcional)</label>
            <input type="text" id="houseNumber" name="houseNumber" />
          </S.InputGroup>
        </S.Row>
        <S.ContainerButtons>
          <S.Button onClick={openPayment} type="button">
            Continuar com o pagamento
          </S.Button>
          <S.Button onClick={closeCheckout} type="button">
            Voltar para o carrinho
          </S.Button>
        </S.ContainerButtons>
      </S.Form>
      {/* entrega */}

      <S.Form className={isOpenPayment ? "is-open" : "is-close"}>
        <p className="title">
          Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice())}
        </p>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input type="text" id="cardOwner" name="cardOwner" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="address">Número do cartão</label>
            <input type="text" id="address" name="address" />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">CVV</label>
            <input type="text" id="city" name="city" />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">Mês de vencimento</label>
            <input type="text" id="cep" name="cep" />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="houseNumber">Ano de vencimento</label>
            <input type="text" id="houseNumber" name="houseNumber" />
          </S.InputGroup>
        </S.Row>

        <S.ContainerButtons>
          <S.Button onClick={openConfirmation} type="button">
            Finalizar pagamento
          </S.Button>
          <S.Button onClick={closePayment} type="button">
            Voltar para a edição de endereço
          </S.Button>
        </S.ContainerButtons>
      </S.Form>
      {/* pagamento */}

      <S.Card className={isOpenConfirmation ? "is-open" : "is-close"}>
        <p className="title">Pedido realizado - order_id</p>

        <p className="text">
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p className="text">
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p className="text">
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className="text">
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <S.ContainerButtons>
          <S.Button onClick={closeConfirmation} type="button">
            Concluir
          </S.Button>
        </S.ContainerButtons>
      </S.Card>
      {/* confirmação */}
    </S.Container>
  );
};

export default Checkout;
