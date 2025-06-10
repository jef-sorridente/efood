import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup'
import { formatPrice } from "../../utils/formatPrice";
import { useFormik } from "formik";

import { Rootreducer } from "../../store";
import { useState } from "react";
import { close } from "../../store/reducers/checkout";

import * as S from "./styles";
import { usePurchaseMutation } from "../../services/api";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector((state: Rootreducer) => state.cart);
  const { isOpen } = useSelector((state: Rootreducer) => state.checkout);

  const [purchase] = usePurchaseMutation()

  const [isOpenPayment, setIsOpenPayment] = useState(false);

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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      address: Yup.string().min(5, 'O endereço precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      city: Yup.string().min(5, 'A cidade precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      cep: Yup.string().min(9, 'O campo precisa ter 8 caracteres').max(9, 'O campo precisa ter 8 caracteres'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string(),
      cardNumber: Yup.string(),
      cardCode: Yup.string(),
      expiresMonth: Yup.string(),
      expiresYear: Yup.string(),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName
        },
        delivery: {
          address: values.address,
          city: values.city,
          cep: values.cep,
          houseNumber: values.houseNumber,
          complement: values.complement,
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              expiresMonth: 1,
              expiresYear: 10,
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const checkInputHasError = (fuildName: string) => {
    const isTouched = fuildName in form.touched
    const isInvalid = fuildName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  // if (items.length === 0) {
  //   return <Navigate to="/" />
  // }
  
  return (
    <S.Container className={isOpen ? "is-open" : ""}>
      <S.Card className={isOpenPayment ? "" : "is-open"}>
        <p className="title">Entrega</p>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input type="text" id="fullName" name="fullName"
              value={form.values.fullName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cep">CEP</label>
            <input type="text" id="cep" name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="houseNumber">Número</label>
            <input type="text" id="houseNumber" name="houseNumber"
              value={form.values.houseNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
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
      </S.Card>
      {/* entrega */}

      <S.Card className={isOpenPayment ? "is-open" : ""}>
        <p className="title">
          Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice())}
        </p>
        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input type="text" id="cardDisplayName" name="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input type="text" id="cardNumber" name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input type="text" id="cardCode" name="cardCode"
              value={form.values.cardCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input type="text" id="expiresMonth" name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input type="text" id="expiresYear" name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''} />
          </S.InputGroup>
        </S.Row>

        <S.ContainerButtons>
          <S.Button type="button">
            Finalizar pagamento
          </S.Button>
          <S.Button onClick={closePayment} type="button">
            Voltar para a edição de endereço
          </S.Button>
        </S.ContainerButtons>
      </S.Card>
      {/* pagamento */}

      {/* <S.Card className={isOpenConfirmation ? "is-open" : ""}>
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
      </S.Card> */}
      {/* confirmação */}
    </S.Container>
  );
};

export default Checkout;
