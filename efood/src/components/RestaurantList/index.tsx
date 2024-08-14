import { Restaurantes } from "../../Pages/Home";
import Restaurant from "../Restaurant";
import * as S from "./styles";

export type Props = {
  restaurantes: Restaurantes[];
};

const RestaurantList = ({ restaurantes }: Props) => (
  <div className="container">
    <S.Container>
      {restaurantes.map((rest) => (
        <Restaurant
          key={rest.id}
          id={rest.id}
          titulo={rest.titulo}
          destacado={rest.destacado}
          avaliacao={rest.avaliacao}
          descricao={rest.descricao}
          capa={rest.capa}
          tipo={rest.titulo}
        />
      ))}
    </S.Container>
  </div>
);

export default RestaurantList;
