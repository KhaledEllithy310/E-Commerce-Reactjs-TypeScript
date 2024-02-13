import Carousel from "react-material-ui-carousel";
import { itemsSlider } from "../../helpers/Data";
import Item from "./ItemSlider";

const Slider = () => {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={true}>
      {itemsSlider.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Slider;
