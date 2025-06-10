import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { formatPrice } from "../../utils/formatPrice";
import { useFormik } from "formik";
import InputMask from "react-input-mask";

import { Rootreducer } from "../../store";
import { useState } from "react";
import { close as closeCheck } from "../../store/reducers/checkout";
import { close as closeCart, open } from "../../store/reducers/cart";

import * as S from "./styles";
import { usePurchaseMutation } from "../../services/api";
import { clear } from "../../store/reducers/cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useSelector((state: Rootreducer) => state.cart);
  const { isOpen } = useSelector((state: Rootreducer) => state.checkout);
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation();
  const navigate = useNavigate();

  const [isOpenPayment, setIsOpenPayment] = useState(false);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((accum, currentValue) => {
      return (accum += currentValue.preco!);
    }, 0);
  };

  const purchaseCompleted = () => {
    dispatch(clear());
    dispatch(closeCheck());
    dispatch(closeCart());
    setIsOpenPayment(false);
    form.resetForm();
    reset();
    navigate("/");
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      cep: "",
      houseNumber: "",
      complement: "",
      cardDisplayName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3).required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
      houseNumber: Yup.string().required(),
      complement: Yup.string(),
      cardDisplayName: Yup.string().min(3).required(),
      cardNumber: Yup.string().required(),
      cardCode: Yup.string().required(),
      expiresMonth: Yup.string().required(),
      expiresYear: Yup.string().required(),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
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
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
      });
    },
  });

  const checkInputHasError = (fuildName: string) => {
    const isTouched = fuildName in form.touched;
    const isInvalid = fuildName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const backToCart = () => {
    dispatch(closeCheck());
    dispatch(open());
  };

  return (
    <S.Container className={isOpen ? "is-open" : ""}>
      <S.ContainerCards>
        {isSuccess && data ? (
          <S.Card className="is-open">
            <p className="title">Pedido realizado - {data.orderId}</p>

            <p className="text">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="text">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="text">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="text">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.ContainerButtons>
              <S.Button onClick={() => purchaseCompleted()} type="button">
                Concluir
              </S.Button>
            </S.ContainerButtons>
          </S.Card>
        ) : (
          <form>
            <S.Card className={isOpenPayment ? "" : "is-open"}>
              <p className="title">Entrega</p>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("fullName") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("address") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>

              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    id="cep"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cep") ? "error" : ""}
                    mask="99999-99"
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="houseNumber">Número</label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("houseNumber") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>

              <S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("complement") ? "error" : ""}
                  />
                </S.InputGroup>
              </S.Row>
              <S.ContainerButtons>
                <S.Button onClick={() => setIsOpenPayment(true)} type="button">
                  Continuar com o pagamento
                </S.Button>
                <S.Button onClick={() => backToCart()} type="button">
                  Voltar para o carrinho
                </S.Button>
              </S.ContainerButtons>
            </S.Card>

            <S.Card className={isOpenPayment ? "is-open" : ""}>
              <p className="title">
                Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice())}
              </p>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("cardDisplayName") ? "error" : ""
                    }
                  />
                </S.InputGroup>
              </S.Row>

              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                    mask="9999-9999-9999"
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardCode") ? "error" : ""}
                    mask="999"
                  />
                </S.InputGroup>
              </S.Row>

              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError("expiresMonth") ? "error" : ""
                    }
                    mask="99"
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresYear") ? "error" : ""}
                    mask="9999"
                  />
                </S.InputGroup>
              </S.Row>

              <S.ContainerButtons>
                <S.Button
                  onClick={form.handleSubmit}
                  title="Finalizar pagamento"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Finalizando pagamento..."
                    : "Finalizar pagamento"}
                </S.Button>
                <S.Button onClick={() => setIsOpenPayment(false)} type="button">
                  Voltar para a edição de endereço
                </S.Button>
              </S.ContainerButtons>
            </S.Card>
          </form>
        )}
      </S.ContainerCards>
      <S.Overlay onClick={() => dispatch(closeCheck())} />
    </S.Container>
  );
};

export default Checkout;
