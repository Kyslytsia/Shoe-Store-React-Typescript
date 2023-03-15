export type state = {
  value: {
    name: string;
    email: string;
    favorites: {
      name: string;
      price: number;
      shoeSize: number | null;
      id: number;
      count: number;
      totalPrice: number;
      img: string;
    }[];
    status: boolean;
    img?: string;
    cart: {
      name: string;
      price: number;
      shoeSize: number | null;
      id: number;
      count: number;
      totalPrice: number;
      img: string;
    }[];
    active: {
      name: string;
      price: number;
      shoeSize: number | null;
      id: number;
      count: number;
      totalPrice: number;
      img: string;
    }[];
  };
};

export type loginProps = {
  name: string;
  email: string;
  favorites: {
    name: string;
    price: number;
    shoeSize: number | null;
    id: number;
    count: number;
    totalPrice: number;
    img: string;
  }[];
  status: boolean;
  img?: string;
  cart: {
    name: string;
    price: number;
    shoeSize: number | null;
    id: number;
    count: number;
    totalPrice: number;
    img: string;
  }[];
  active: {
    name: string;
    price: number;
    shoeSize: number | null;
    id: number;
    count: number;
    totalPrice: number;
    img: string;
  }[];
};

export type countProps = {
  count: number;
  id: number;
  price: number;
  totalPrice?: number;
  shoeSize: number | null;
};

export type addShoeInCartProps = {
  name: string;
  price: number;
  shoeSize: number | null;
  id: number;
  count: number;
  totalPrice: number;
  img: string;
};

export type addShoeInFavoritestProps = {
  name: string;
  price: number;
  shoeSize: number | null;
  id: number;
  count: number;
  totalPrice: number;
  img: string;
};

export type deleteShoeInCartProps = {
  id: number;
  shoeSize: number | null;
  name?: string;
  price?: number;
};
