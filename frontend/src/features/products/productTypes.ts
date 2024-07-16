export type Product = {
  id: number;
  name: string;
  brandName: string;
  colour: string;
  imageUrl: string;
  price: {
    value: number;
    text: string;
  };
  url?: string;
};

export type InitialState = {
  loading: boolean;
  products: Product[];
  error: string | null;
};
