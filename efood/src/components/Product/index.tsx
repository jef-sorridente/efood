import { Container, Image, Title, Buttom } from "./styles";

type Props = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Product = ({ id, title, description, image }: Props) => (
  <Container key={id}>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <p>{description}</p>
    <Buttom>Adicionar ao carrinho</Buttom>
  </Container>
);

export default Product;
