import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";
import Sort from "../../components/Sort/Sort";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer"
import { priceLowHigh, priceHighLow } from "../../utils/sort";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("price-low-high");
  const [sortTitle, setSortTitle] = useState("All Products")
  const location = useLocation();

  let cat = "";
  let keyword = "";

  if (location.state) {
    cat = location.state.cat;
  }
  if (location.state) {
    keyword = location.state.keyword;
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
        setSortTitle(cat)
      } else if (keyword.length > 0) {
        const results = allProducts.filter((product) =>
          product.keywords.includes(keyword)
        );
        setCategory(results);
        setSortTitle(keyword)
      }
      else {
        setCategory(allProducts);
      }
    };
    fetchProducts();
  }, [cat, keyword]);

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
    if (option === "") {
      setSortTitle("All Products")
    } else {
      setSortTitle(option)
    }
    setApplySort(true);
  };

  return (
    <Layout user={props.user} admin={props.admin}>
      <div className="container">
        <div className="w-full px-20 flex flex-col">
          <div className="flex flex-wrap justify-center mb-24">
            <div className="w-full self-start mt-16 mb-8 text-3xl font-black text-orange">
              <div className="mb-2">
                {sortTitle}
              </div>
              <div className="flex">
                <div>
                  <Categories handleCategories={handleCategories} />
                </div>
                <div>
                  <Sort handleSort={handleSort} />
                </div>
              </div>
            </div>
            {category.map((product) => {
              return (
                <div key={product._id}>
                  <Product
                    _id={product._id}
                    name={product.name}
                    imgURL={product.imgURL}
                    price={product.price}
                    keywords={product.keywords}
                    category={product.category}
                  />
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Products;
