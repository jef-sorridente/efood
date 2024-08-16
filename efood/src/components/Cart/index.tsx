import { useDispatch, useSelector } from "react-redux";
import { Buttom } from "../Product/styles";
import * as S from "./styles";
import { close, remove } from "../../store/reducers/cart";
import { Rootreducer } from "../../store";
import trashIcon from "../../assets/images/trash.png";
import { formatPrice } from "../Product";

const Cart = () => {
  const { isOpen, items } = useSelector((state: Rootreducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((accum, currentValue) => {
      return (accum += currentValue.preco!);
    }, 0);
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>{formatPrice(item.preco)}</p>
                </div>
                <img
                  src={trashIcon}
                  className="trash"
                  onClick={() => removeItem(item.id)}
                />
              </S.CartItem>
            ))}
          </ul>
        ) : (
          <ul>
            <h4>Você não possui itens no seu carrinho!</h4>
          </ul>
        )}

        <S.TotalPrice>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </S.TotalPrice>
        <Buttom>Continuar com a entrega</Buttom>
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
