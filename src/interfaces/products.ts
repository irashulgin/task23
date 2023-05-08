export interface PRODUCTS {
  data: null | PRODUCT[];
  isValid: boolean;
}
export interface WISHLISTDATA {
  data: PRODUCT[];
  visible: boolean;
}
export interface PRODUCT {
  id: string;
  name: string;
  price: number;
  reviews: string[];
  description: string;
  image: string;
  rating: number;
}
export interface STORE {
  wishList: WISHLISTDATA;
  products: PRODUCTS;
}
