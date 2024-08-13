interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

class Products {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  score: number;
  items: ProductItem[];
  featured: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    score: number,
    items: ProductItem[],
    featured: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.image = image;
    this.score = score;
    this.items = items;
    this.featured = featured;
  }
}
export default Products;
