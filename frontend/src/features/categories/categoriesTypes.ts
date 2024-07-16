export type Brands = {
  id: string;
  content: {
    title: string;
  };
  children: IndividualBrand[];
};

export type IndividualBrand = {
  categoryId: string;
  title: string;
};

export type InitialState = {
  loading: boolean;
  categories: Brands[];
  error: string | null;
};
