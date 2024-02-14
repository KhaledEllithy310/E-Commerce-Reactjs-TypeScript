import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <section className="container">
      <h1 className="py-11 text-center font-bold text-2xl">Products</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-9 gap-6 ">
        {/* <ProductItem /> */}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </section>
    </section>
  );
}
