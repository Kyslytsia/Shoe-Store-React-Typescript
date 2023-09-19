const sizes = [40, 41, 42, 43, 44, 45];

interface ShoeSize {
  coloredSize: number | null;
  setShoeSize: (num: number) => void;
  setColoredSize: (num: number) => void;
}

const Size = ({ setShoeSize, setColoredSize, coloredSize }: ShoeSize) => {
  return (
    <div className="size">
      {sizes.map((size, index) => (
        <span
          style={{
            backgroundColor: coloredSize === index ? " #2b2f4c" : "",
            color: coloredSize === index ? "white" : "",
          }}
          onClick={() => {
            setShoeSize(size);
            setColoredSize(index);
          }}
        >
          {size}
        </span>
      ))}
    </div>
  );
};

export default Size;
