import Main from "./main/Main";
import Reviews from "./reviews/Reviews";
import ChoiceOfShoes from "./choice-of-shoes/ChoiceOfShoes";
import AboutUsMain from "./about-us-homepage/AboutUsHomePage";
import OurWorksHomePage from "./our-works-homepage/OurWorksHomePage";

const HomePage: React.FC = () => {
  return (
    <>
      <Main />
      <AboutUsMain />
      <OurWorksHomePage />
      <ChoiceOfShoes />
      <Reviews />
    </>
  );
};

export default HomePage;
