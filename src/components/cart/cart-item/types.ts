export interface CartItemProps {
  id: number;
  img: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
  shoeSize: number | null;
}
