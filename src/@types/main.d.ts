export type CartProviderType = {
  children: ReactNode;
};

export type ReduceReturnType  = {
  totalCart?: number;
};

export interface IParfum {
  id: number;
  title: string;
  price: number;
  image: string;
  route: string;
}

export interface IProduct {
  title: string;
  description: string;
  image: string;
  tones: string;
}

export interface IShoppingCartItem {
  product: IParfum;
  quantity: number;
}