import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import Sort from "../../components/Sort/Sort";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer"
import { priceLowHigh, priceHighLow } from "../../utils/sort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("price-low-high");
  const location = useLocation();

  let cat = "";

  if (location.state) {
    cat = location.state.cat;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      if (cat.length > 0) {
        const results = allProducts.filter((product) =>
          product.category.includes(cat)
        );
        setCategory(results);
      } else {
        setCategory(allProducts);
      }
    };
    fetchProducts();
  }, [cat]);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    if (type === "price-low-high") {
      setCategory(priceLowHigh(category));
    } else if (type === "price-high-low") {
      setCategory(priceHighLow(category));
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleCategories = (option) => {
    const results = products.filter((product) =>
      product.category.includes(option)
    );
    setCategory(results);
    setApplySort(true);
  };

  return (
    <Layout>
      <div className="max-h-screen flex-col justify-center w-full items-center bg-background overflow-y-auto">
        <div className="flex flex-col items-end mt-4 mr-20">
          <div>
            <Categories handleCategories={handleCategories} />
          </div>
          <div>
            <Sort handleSort={handleSort} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {category.map((product) => {
            return (
              <div key={product._id}>
                <Product
                  _id={product._id}
                  name={product.name}
                  imgURL={product.imgURL}
                  price={product.price}
                  keywords={product.keywords.map((k, i) => {
                    return <div key={i}>#{k}</div>;
                  })}
                />{" "}
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Products;
