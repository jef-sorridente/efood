import { IoArrowBack } from "react-icons/io5";

import * as S from "./styles";

import logo from "../../assets/images/logo.png";

import bannerImg from "../../assets/images/fundo.png";

export type Props = {
  page: "home" | "product";
};

const Header = ({ page }: Props) => (
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
          <p>0 produto(s) no carrinho</p>
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

export default Header;
