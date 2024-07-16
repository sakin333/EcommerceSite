export type ProductDetail = {
  id: number;
  name: string;
  description: string;
  brand: string;
  media: {
    images: Images[];
  };
  info: {
    aboutMe: string;
    sizeAndFit: string | null;
    careInfo: string;
  };
  productType: {
    id: number;
    name: string;
  };
  price: {
    value: number;
    text: string;
  };
};

type Images = {
  url: string;
  colorWayId: string;
  color: string;
  isPrimary: boolean;
};

export type InitialState = {
  loading: boolean;
  product: ProductDetail | null;
  error: string | null;
};
