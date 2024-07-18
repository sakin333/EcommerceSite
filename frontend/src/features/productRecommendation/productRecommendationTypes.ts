export type RecommendedProduct = {
  id: number;
  name: string;
  brandName: string;
  imageUrl: string;
  price: number;
};

export type InitialState = {
  loading: boolean;
  recommendedProducts: RecommendedProduct[];
  error: string | null;
};
