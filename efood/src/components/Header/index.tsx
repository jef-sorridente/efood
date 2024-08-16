import { IoArrowBack } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import * as S from "./styles";

import logo from "../../assets/images/logo.png";

import bannerImg from "../../assets/images/fundo.png";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/reducers/cart";
import { Rootreducer } from "../../store";

export type Props = {
  page: "home" | "product";
};

const Header = ({ page }: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: Rootreducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.Header style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        {page === "product" ? (
          <S.Head page={page}>
            <S.BtnBack to="/">
              <IoArrowBack />
              Restaurantes
            </S.BtnBack>
            <S.logo>
              <img src={logo} alt="Efood" />
            </S.logo>
            <S.InfoCart onClick={openCart}>
              {items.length} produto(s) no carrinho <FaShoppingCart />
            </S.InfoCart>
          </S.Head>
        ) : (
          <>
            <S.Head page={page}>
              <S.logo>
                <img src={logo} alt="Efood" />
              </S.logo>
            </S.Head>
            <S.Text>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Text>
          </>
        )}
      </div>
    </S.Header>
  );
};

export default Header;
