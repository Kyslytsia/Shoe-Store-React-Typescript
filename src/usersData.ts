type usersType = {
  name: string;
  email: string;
  password: string;
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
}[];

const users: usersType = [
  {
    name: "Ivan",
    email: "ivan@gmail.com",
    password: "123",
    favorites: [],
    status: false,
    img: "",
    cart: [],
    active: [],
  },
];

export default users;
