export interface cardProps {
  name: string;
  img: string;
  id: number;
  price: number;
  totalPrice: number;
  count: number;
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
