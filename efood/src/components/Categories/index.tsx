import * as S from "./styles";

import star from "../../assets/images/star.png";

type Props = {
  title: string;
  description: string;
  category: string;
  image: string;
  score: number;
  id: number;
  featured: boolean;
};

const Categories = ({
  title,
  description,
  category,
  image,
  score,
  id,
  featured,
}: Props) => (
  <S.Card>
    <S.Image>
      <img src={image} alt={title} />
    </S.Image>
    <S.Infos>
      <S.Title>
        <p>{title}</p>
        <S.Score>
          <span>{score}</span>
          <img src={star} alt="Star" />
        </S.Score>
      </S.Title>
      <S.Description>{description}</S.Description>
      <S.LinkCustom to={`/products/${id}`}>Saiba Mais</S.LinkCustom>
      <S.TagContainer>
        <S.Tag>{category}</S.Tag>
        {featured && <S.Tag>Destaque da semana</S.Tag>}
      </S.TagContainer>
    </S.Infos>
  </S.Card>
);

export default Categories;
