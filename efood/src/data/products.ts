import Products from "../models/Products";

import japonesa from "../assets/images/japonesa.png";
import italiana from "../assets/images/italiana.png";
import pizza from "../assets/images/pizza.png";
import ramen from "../assets/images/ramen.webp";
import mexicana from "../assets/images/mexicana.jpg";
import tacos from "../assets/images/tacos.webp";
import kungpao from "../assets/images/kungpao.webp";
import chinesa from "../assets/images/chinesa.jpg";

export const products: Products[] = [
  {
    id: 1,
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    category: "Japonesa",
    image: japonesa,
    score: 4.9,
    items: [
      {
        id: 1,
        title: "Ramen Shoyu",
        description:
          "Desfrute do autêntico Ramen Shoyu: caldo de soja rico e saboroso, macarrão fresco, fatias de carne suculenta, ovo cozido, e vegetais crocantes. Um prato reconfortante e delicioso!",
        image: ramen,
      },
      {
        id: 2,
        title: "Ramen Shoyu",
        description:
          "Desfrute do autêntico Ramen Shoyu: caldo de soja rico e saboroso, macarrão fresco, fatias de carne suculenta, ovo cozido, e vegetais crocantes. Um prato reconfortante e delicioso!",
        image: ramen,
      },
      {
        id: 3,
        title: "Ramen Shoyu",
        description:
          "Desfrute do autêntico Ramen Shoyu: caldo de soja rico e saboroso, macarrão fresco, fatias de carne suculenta, ovo cozido, e vegetais crocantes. Um prato reconfortante e delicioso!",
        image: ramen,
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    category: "Italiana",
    image: italiana,
    score: 4.6,
    items: [
      {
        id: 1,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
      {
        id: 2,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
      {
        id: 3,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
      {
        id: 4,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
      {
        id: 5,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
      {
        id: 6,
        title: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        image: pizza,
      },
    ],
    featured: false,
  },
  {
    id: 3,
    title: "El Mariachi",
    description:
      "Sinta o sabor do México com El Mariachi! Nossos tacos, burritos e nachos são preparados com ingredientes frescos e receitas autênticas. Descubra a verdadeira comida mexicana com entrega rápida e atendimento excepcional.",
    category: "Mexicana",
    image: mexicana,
    score: 4.7,
    items: [
      {
        id: 1,
        title: "Tacos al Pastor",
        description:
          "Tacos al Pastor: carne de porco marinada, abacaxi fresco, cebola e coentro em tortillas de milho. Um prato tradicional e saboroso.",
        image: tacos,
      },
      {
        id: 2,
        title: "Tacos al Pastor",
        description:
          "Tacos al Pastor: carne de porco marinada, abacaxi fresco, cebola e coentro em tortillas de milho. Um prato tradicional e saboroso.",
        image: tacos,
      },
      {
        id: 3,
        title: "Tacos al Pastor",
        description:
          "Tacos al Pastor: carne de porco marinada, abacaxi fresco, cebola e coentro em tortillas de milho. Um prato tradicional e saboroso.",
        image: tacos,
      },
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Dragão Dourado",
    description:
      "Delicie-se com a culinária chinesa autêntica no Dragão Dourado! Oferecemos uma seleção de pratos tradicionais como frango kung pao, arroz frito e rolinhos primavera. Experimente o verdadeiro sabor da China com nossa entrega rápida e serviço de qualidade.",
    category: "Chinesa",
    image: chinesa,
    score: 4.6,
    items: [
      {
        id: 1,
        title: "Frango Kung Pao",
        description:
          "Frango Kung Pao: peito de frango picante, pimentões, amendoins e molho de soja. Um prato clássico com um toque de especiarias.",
        image: kungpao,
      },
      {
        id: 2,
        title: "Frango Kung Pao",
        description:
          "Frango Kung Pao: peito de frango picante, pimentões, amendoins e molho de soja. Um prato clássico com um toque de especiarias.",
        image: kungpao,
      },
      {
        id: 3,
        title: "Frango Kung Pao",
        description:
          "Frango Kung Pao: peito de frango picante, pimentões, amendoins e molho de soja. Um prato clássico com um toque de especiarias.",
        image: kungpao,
      },
    ],
    featured: true,
  },
];
