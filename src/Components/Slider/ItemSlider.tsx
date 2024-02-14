import { ISlider } from "../../interfaces";
import "./itemSlider.css";
import Button from "../Ui/Button";
interface IProps {
  item: ISlider;
}
const Item = ({ item }: IProps) => {
  return (
    <section className="slide__item">
      <div className="img-container">
        <img src={item.img} alt="img" />
      </div>
      <section className="absolute flex top-1/2 left-1/4 w-1/3 translate-y-[-50%]">
        <div className="text-xl text-white space-y-10">
          <p className="font-bold capitalize">{item.name}</p>
          <p className="">{item.description}</p>
          <Button classes="text-white bg-background py-2 px-20 hover:bg-sky-800">
            buy now
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Item;
