interface IReview {
  id: number;
  text: string;
}
export interface IProduct {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
}
export interface ICartProduct extends IProduct {
  quantity: number;
}
export interface IProductsListResponse {
  page: number;
  amount: number;
  total: number;
  products: IProduct[];
}

export type IReviewsResponse = IReview[];

export interface ICart {
  products: ICartProduct[];
}

export interface ICheckoutOrder {
  phone: string;
  cart: Omit<ICartProduct, 'image_url' | 'title' | 'description' | 'price'>[];
}
