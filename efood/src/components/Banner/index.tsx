import * as S from "./styled";

import bannerImg from "../../assets/images/italiana.png";

type Props = {
  title: string;
  category: string;
};

const Banner = ({ title, category }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.Background />
    <div className="container">
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
    </div>
  </S.Banner>
);

export default Banner;
