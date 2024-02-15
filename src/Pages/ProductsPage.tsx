import { useState } from "react";
import Products from "../Components/Products/Products";
import { products } from "../helpers/Data";
import { IProduct } from "../interfaces";
import Input from "../Components/Ui/Input";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("lowToHigh"); // Default sort order

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterProducts = (product: IProduct) => {
    const searchLower = searchQuery.toLowerCase();
    const titleLower = product.title.toLowerCase();
    const descriptionLower = product.description.toLowerCase();

    const isMatchingSearch =
      titleLower.includes(searchLower) ||
      descriptionLower.includes(searchLower);

    const isMatchingCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return isMatchingSearch && isMatchingCategory;
  };

  const sortProducts = (products: IProduct[]) => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      else return b.price - a.price;
    });

    return sortedProducts;
  };

  return (
    <div>
      <section className="container mt-20 py-9 grid grid-cols-1 sm:grid-cols-4 gap-3">
        <section className="col-span-1 py-9">
          <h2 className="text-2xl font-bold text-background">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="mt-4 ">
            <Input
              id="search"
              label="Search"
              name="search"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              name="sort"
              id="sort"
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full border border-gray-400 p-2  rounded-md mt-2"
            >
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </section>
        <section className="col-span-3">
          <Products
            isShow={false}
            filteredProducts={sortProducts(products.filter(filterProducts))}
          />
        </section>
      </section>
    </div>
  );
}
