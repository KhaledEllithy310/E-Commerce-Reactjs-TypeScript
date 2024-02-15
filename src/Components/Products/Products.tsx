import { products } from "../../helpers/Data";
import { IProduct } from "../../interfaces";
import MainTitle from "../Ui/MainTitle";
import ProductItem from "./ProductItem";
interface IProps {
  isShow?: boolean;
  filteredProducts?: IProduct[];
}
export default function Products({
  isShow = true,
  filteredProducts = products,
}: IProps) {
  const renderProductList = filteredProducts.map((item) => {
    return <ProductItem key={item.id} product={item} />;
  });
  return (
    <section className={` ${isShow ? "container" : ""} `}>
      {isShow && <MainTitle title="products" />}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-9 gap-6 ">
        {renderProductList}
      </section>
    </section>
  );
}
