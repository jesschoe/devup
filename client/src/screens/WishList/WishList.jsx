import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { getWishList } from "../../services/users";
import Sort from "../../components/Sort/Sort";
import Categories from "../../components/Categories/Categories";
import { priceLowHigh, priceHighLow } from "../../utils/sort";

const WishList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("price-low-high");
  const location = useLocation();
  const { id } = useParams();
  let cat = "";
  let keyword = "";

  if (location.state) {
    cat = location.state.cat;
  }
  if (location.state) {
    keyword = location.state.keyword;
  }

  useEffect(() => {
    const fetchUserWishList = async () => {
      const allProducts = await getWishList(id);
      setProducts(allProducts);
      console.log(allProducts)
      if (cat.length > 0) {
        const results = allProducts.filter((product) =>
          product.category.includes(cat)
        );
        setCategory(results);
      } else if (keyword.length > 0) {
        const results = allProducts.filter((product) =>
          product.keywords.includes(keyword)
        );
        setCategory(results);
      } else {
        setCategory(allProducts);
      }
    };
    fetchUserWishList();
  }, [id]);

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
      <Footer />
    </Layout>
  );
};

export default WishList;
