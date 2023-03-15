import "./ChoiceOfShoes.css";

const ChoiceOfShoes: React.FC = () => {
  return (
    <div className="choice-conteiner">
      <div className="choice-img"></div>
      <div className="choice-info-block">
        <h2 className="choice-info-block__title">
          What men's shoes to choose?
        </h2>
        <div className="choice-info-block__text">
          Good men's classic shoes are one of the priority items in a man's
          wardrobe list. Even if you rarely wear a formal suit, you should still
          have at least one pair of dress shoes for formal occasions. Any man
          needs to know what types of shoes are and how you can choose the right
          pair for yourself.
        </div>
        <div className="choice-info-block__button">
          <a
            href="https://brammels.com/style/suit-and-shoes/"
            target="blank"
            className="button-link"
          >
            go to info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChoiceOfShoes;
