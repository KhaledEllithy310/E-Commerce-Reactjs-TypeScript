import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import product1 from "../../../public/images/products/product1.jpg";
import Button from "../Ui/Button";
import "./ProductItem.css";
export default function ProductItem() {
  return (
    <section className="bg-accent2 rounded-lg card-product relative">
      {/* Start img card */}
      <div className="img-card-container rounded-lg overflow-hidden">
        <img src={product1} alt="product" className="w-full h-64 " />
      </div>{" "}
      {/* End img card */}
      <section className="px-4 py-2">
        {/* Start Description card */}
        <div className="space-y-2">
          <h2 className="font-semibold text-xl capitalize">product 1</h2>
          <p className="text-xl text-background font-bold">155 $</p>
        </div>
        {/* End Description card */}
        {/* Start Actions card */}
        <section className="flex justify-end pt-[14px] pb-2">
          <Button classes="bg-primary text-white py-1 px-10 shadow-md hover:shadow-lg">
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
