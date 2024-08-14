import * as S from "./styles";

import star from "../../assets/images/star.png";

type Props = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Props) => (
  <S.Card>
    <S.Image>
      <img src={capa} alt={titulo} />
    </S.Image>
    <S.Infos>
      <S.Title>
        <p>{titulo}</p>
        <S.Score>
          <span>{avaliacao}</span>
          <img src={star} alt="Star" />
        </S.Score>
      </S.Title>
      <S.Description>{descricao}</S.Description>
      <S.LinkCustom to={`/products/${id}`}>Saiba Mais</S.LinkCustom>
      <S.TagContainer>
        <S.Tag>{tipo}</S.Tag>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
      </S.TagContainer>
    </S.Infos>
  </S.Card>
);

export default Restaurant;
