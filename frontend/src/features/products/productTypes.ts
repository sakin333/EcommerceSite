export type Product = {
  id: number;
  name: string;
  brandName: string;
  color: string;
  imageUrl: string;
  price: string;
  url: string;
};

export type InitialState = {
  loading: boolean;
  products: Product[];
  error: string | null;
};
