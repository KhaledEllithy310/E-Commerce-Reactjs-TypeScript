import Slider from "../Components/Slider/Slider";
import Services from "../Components/Services/Services";
import Products from "../Components/Products/Products";
import Footer from "../Components/Ui/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
