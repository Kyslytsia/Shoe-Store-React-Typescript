export interface ShoeDataProps {
  name: string;
  price: number;
  shoeSize: number | null;
  id: number;
  count: number;
  totalPrice: number;
  img: string;
}
export interface State {
  value: LoginProps;
}

export interface LoginProps {
  name: string;
  email: string;
  favorites: ShoeDataProps[];
  status: boolean;
  img?: string;
  cart: ShoeDataProps[];
  active: ShoeDataProps[];
}

export interface CountProps {
  count: number;
  id: number;
  price: number;
  totalPrice?: number;
  shoeSize: number | null;
}

export interface DeleteShoeInCartProps {
  id: number;
  shoeSize: number | null;
  name?: string;
  price?: number;
}
