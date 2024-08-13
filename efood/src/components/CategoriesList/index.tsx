import Products from "../../models/Products";
import Categories from "../Categories";
import * as S from "./styles";

export type Props = {
  categories: Products[];
};

const CategoriesList = ({ categories }: Props) => (
  <div className="container">
    <S.Container>
      {categories.map((categorie) => (
        <Categories
          key={categorie.id}
          id={categorie.id}
          title={categorie.title}
          description={categorie.description}
          category={categorie.category}
          image={categorie.image}
          score={categorie.score}
          featured={categorie.featured}
        />
      ))}
    </S.Container>
  </div>
);

export default CategoriesList;
