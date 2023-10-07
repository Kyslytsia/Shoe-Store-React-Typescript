export interface CardProps {
  id: number;
  img: string;
  name: string;
  count: number;
  price: number;
  totalPrice: number;
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
