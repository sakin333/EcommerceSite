import { Brands } from "./features/categories/categoriesTypes";
import { ProductDetail } from "./features/productDetails/productDetailsTypes";
import { RecommendedProduct } from "./features/productRecommendation/productRecommendationTypes";
import { Product } from "./features/products/productTypes";
import { CollectionTypes } from "./pages/Homepage/types/collection-types";
import { TestimonialsType } from "./pages/Homepage/types/testimonial-types";

export const collectionItems: CollectionTypes[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Trendy Jacket",
    price: "$120",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Street Sneakers",
    price: "$90",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Casual Jeans",
    price: "$70",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Classic Watch",
    price: "$150",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Trendy Shirt",
    price: "$120",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Formal Dress",
    price: "$90",
  },
  // {
  //   id: 7,
  //   image: "https://via.placeholder.com/150",
  //   title: "Casual Jeans",
  //   price: "$70",
  // },
  // {
  //   id: 8,
  //   image: "https://via.placeholder.com/150",
  //   title: "Classic Watch",
  //   price: "$150",
  // },
  // {
  //   id: 9,
  //   image: "https://via.placeholder.com/150",
  //   title: "Casual Jeans",
  //   price: "$70",
  // },
];

export const testimonials: TestimonialsType[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO at Company",
    image: "https://via.placeholder.com/150",
    text: "This service is amazing! It has significantly improved our team's productivity.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Marketing Director",
    image: "https://via.placeholder.com/150",
    text: "A fantastic product with great support. Our revenue has increased since using it.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    text: "Highly recommended. The user interface is intuitive and easy to navigate.",
  },
  {
    id: 4,
    name: "Caitlin Clark",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    text: "Highly recommended. The user interface is intuitive and easy to navigate.",
  },
  {
    id: 5,
    name: "Park Chaewon",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    text: "Highly recommended. The user interface is intuitive and easy to navigate.",
  },
  {
    id: 6,
    name: "Kim Jisoo",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    text: "Highly recommended. The user interface is intuitive and easy to navigate.",
  },
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    brandName: "Fashionista",
    colour: "Black",
    imageUrl:
      "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
    price: {
      value: 120.99,
      text: "$120.99",
    },
    url: "https://example.com/products/classic-leather-jacket",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brandName: "Denim Deluxe",
    colour: "Blue",
    imageUrl:
      "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Dylan-Slim-Fit-Jeans-Retro-Blue-front.jpg?v=1665604879",
    price: {
      value: 49.99,
      text: "$49.99",
    },
    url: "https://example.com/products/slim-fit-jeans",
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    brandName: "Sunshine Couture",
    colour: "Yellow",
    imageUrl:
      "https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",
    price: {
      value: 75.5,
      text: "$75.50",
    },
    url: "https://example.com/products/summer-floral-dress",
  },
  {
    id: 5,
    name: "Winter Floral Dress",
    brandName: "Sunshine Couture",
    colour: "Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0028/1945/7082/files/black-floral-dress.jpg?v=1578013838",
    price: {
      value: 70.5,
      text: "$70.50",
    },
    url: "https://example.com/products/summer-floral-dress",
  },
];

export const mockBrands: Brands[] = [
  {
    id: "1",
    content: {
      title: "Top Fashion Brands",
    },
    children: [
      {
        categoryId: "101",
        title: "Fashionista",
      },
      {
        categoryId: "102",
        title: "Denim Deluxe",
      },
      {
        categoryId: "103",
        title: "Sunshine Couture",
      },
    ],
  },
];

export const mockProductDetails: ProductDetail[] = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    description:
      "A timeless black leather jacket that never goes out of style.",
    brand: "Fashionista",
    media: {
      images: [
        {
          url: "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
          colorWayId: "black01",
          color: "Black",
          isPrimary: true,
        },
        {
          url: "https://cdn-img.prettylittlething.com/f/c/2/3/fc23e6d2955ada665fb7abc6d903b26f79d7560b_clt5204_1.jpg?imwidth=600",
          colorWayId: "black02",
          color: "Black",
          isPrimary: false,
        },
        {
          url: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67030445_99.jpg?imwidth=2048&imdensity=1&ts=1703093595446",
          colorWayId: "black03",
          color: "Black",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "100% genuine leather. Dry clean only.",
      sizeAndFit: "Model is wearing size M.",
      careInfo: "Use leather conditioner to keep the material soft.",
    },
    productType: {
      id: 1,
      name: "Jacket",
    },
    price: {
      value: 120.99,
      text: "$120.99",
    },
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Stylish blue jeans with a slim fit design.",
    brand: "Denim Deluxe",
    media: {
      images: [
        {
          url: "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Dylan-Slim-Fit-Jeans-Retro-Blue-front.jpg?v=1665604879",

          colorWayId: "blue01",
          color: "Blue",
          isPrimary: true,
        },
        {
          url: "https://example.com/images/slim-fit-jeans-2.jpg",
          colorWayId: "blue02",
          color: "Blue",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "98% cotton, 2% elastane. Machine washable.",
      sizeAndFit: "Model is wearing size 32.",
      careInfo: "Wash inside out to preserve color.",
    },
    productType: {
      id: 2,
      name: "Jeans",
    },
    price: {
      value: 49.99,
      text: "$49.99",
    },
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    description:
      "A beautiful yellow dress with a floral print, perfect for summer.",
    brand: "Sunshine Couture",
    media: {
      images: [
        {
          url: "https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",

          colorWayId: "yellow01",
          color: "Yellow",
          isPrimary: true,
        },
        {
          url: "https://example.com/images/summer-floral-dress-2.jpg",
          colorWayId: "yellow02",
          color: "Yellow",
          isPrimary: false,
        },
      ],
    },
    info: {
      aboutMe: "100% cotton. Machine washable.",
      sizeAndFit: null,
      careInfo: "Wash with similar colors.",
    },
    productType: {
      id: 3,
      name: "Dress",
    },
    price: {
      value: 75.5,
      text: "$75.50",
    },
  },
];

export const mockRecommendedProducts: RecommendedProduct[] = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    brandName: "Fashionista",
    imageUrl:
      "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
    price: 120.99,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    brandName: "Denim Deluxe",
    imageUrl:
      "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Dylan-Slim-Fit-Jeans-Retro-Blue-front.jpg?v=1665604879",
    price: 49.99,
  },
  {
    id: 3,
    name: "Summer Floral Dress",
    brandName: "Sunshine Couture",
    imageUrl:
      "https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",
    price: 75.5,
  },
  {
    id: 5,
    name: "Winter Floral Dress",
    brandName: "Sunshine Couture",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0028/1945/7082/files/black-floral-dress.jpg?v=1578013838",
    price: 70.5,
  },
  {
    id: 6,
    name: "Classic Leather Jacket",
    brandName: "Fashionista",
    imageUrl:
      "https://www.wilsonsleather.com/media/catalog/product/m/m/mm1z1778_mm1z1778c01_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1542&width=1300&canvas=1300:1542",
    price: 120.99,
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    brandName: "Denim Deluxe",
    imageUrl:
      "https://americantall.com/cdn/shop/products/American-Tall-Men-Mens-Dylan-Slim-Fit-Jeans-Retro-Blue-front.jpg?v=1665604879",
    price: 49.99,
  },
  {
    id: 8,
    name: "Summer Floral Dress",
    brandName: "Sunshine Couture",
    imageUrl:
      "https://www.chicwish.com/media/catalog/product/cache/789a34736ead3066d85296b038a5aa03/2/0/20525mm.37.jpg",
    price: 75.5,
  },
  {
    id: 9,
    name: "Winter Floral Dress",
    brandName: "Sunshine Couture",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0028/1945/7082/files/black-floral-dress.jpg?v=1578013838",
    price: 70.5,
  },
];
