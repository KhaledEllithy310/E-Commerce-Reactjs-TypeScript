import { ISlider } from "../../interfaces";
import "./itemSlider.css";
import Button from "../Ui/Button";
interface IProps {
  item: ISlider;
}
const Item = ({ item }: IProps) => {
  return (
    <section
      className="slide__item "
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="img-container">
        {/* <img src={item.img} alt="img" /> */}
      </div>
      <section className="absolute flex mt-[30px] top-1/2 left-1/2 translate-x-[-50%] md:left-1/4 md:w-1/3 translate-y-[-50%]">
        <div className=" text-white space-y-10">
          <p className="font-bold capitalize text-lg md:text-xl ">
            {item.name}
          </p>
          <p className="text-sm md:text-lg">{item.description}</p>
          <Button classes="text-lg md:text-xl text-white bg-background py-1 md:py-2 px-4 md:px-20 hover:bg-sky-800">
            buy now
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Item;
