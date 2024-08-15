import * as S from "./styled";

type Props = {
  title: string;
  category: string;
  image: string;
};

const Banner = ({ title, category, image }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${image})` }}>
      <S.Background />
      <div className="container">
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </div>
    </S.Banner>
  );
};

export default Banner;
