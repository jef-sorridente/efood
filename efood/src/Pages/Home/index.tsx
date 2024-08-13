import CategoriesList from "../../components/CategoriesList";
import Header from "../../components/Header";
import { products } from "../../data/products";

const Home = () => (
  <>
    <Header page="home" />
    <CategoriesList categories={products} />
  </>
);

export default Home;
