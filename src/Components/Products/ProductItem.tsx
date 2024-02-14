import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import Button from "../Ui/Button";
import "./ProductItem.css";
import { useAppDispatch } from "../../RTK/Store";
import { addToCart } from "../../RTK/features/Cart/CartSlice";
import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
}
export default function ProductItem({ product }: IProps) {
  const dispatch = useAppDispatch();

  return (
    <section className="bg-accent2 rounded-lg card-product relative">
      {/* Start img card */}
      <div className="img-card-container rounded-lg overflow-hidden">
        <img src={product.image} alt="product" className="w-full h-64 " />
      </div>{" "}
      {/* End img card */}
      <section className="px-4 py-2">
        {/* Start Description card */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl capitalize">{product.title}</h2>
          <p className="text-xl text-background font-bold">{product.price} $</p>
        </div>
        {/* End Description card */}
        {/* Start Actions card */}
        <section className="flex justify-end pt-[14px] pb-2">
          <Button
            classes="bg-primary text-white py-1 px-10 shadow-md hover:shadow-lg"
            onClick={() => {
              dispatch(addToCart(product));
              console.log("product", product);
            }}
          >
            <AddShoppingCart fontSize="medium" />
          </Button>
          <Button classes="bg-white text-black py-1 px-2 shadow-md hover:shadow-lg absolute right-3 top-3 z-10 rounded-[12px]">
            <FavoriteBorder fontSize="medium" />
          </Button>
        </section>
        {/* End Actions card */}
      </section>
    </section>
  );
}
