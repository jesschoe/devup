import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Layout/Layout";
import { useLocation, useParams } from "react-router-dom";
import { getWishList, deleteWishListItem } from "../../services/users";
import Sort from "../../components/Sort/Sort";
import Categories from "../../components/Categories/Categories";
import { priceLowHigh, priceHighLow } from "../../utils/sort";
import Product from "../../components/Product/Product";

const WishList = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("price-low-high");
  const location = useLocation();
  const { userId } = useParams();
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
      const allProducts = await getWishList(userId);
      setProducts(allProducts);
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
  }, [userId, cat, keyword]);

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

  const handleDelete = (userId, id) => {
    deleteWishListItem(userId,id)
    window.location.reload()
  }

  return (
    <Layout user={props.user}>
      <div className="container">
        <div className="w-9/12 flex flex-col mt-10">
        <div className="mt-10 mb-4 text-3xl font-black text-white self-start ml-20">
            <div className="mb-2 text-3xl text-orange">
              My Wishlist
            </div>
            <div className="flex sm: mx-auto lg:mr-32">
              <div>
                <Categories handleCategories={handleCategories} />
              </div>
              <div>
                <Sort handleSort={handleSort} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center mb-24">
            {category.map((product) => {
              return (
                <div className="flex flex-col"key={product._id}>
                  <Product
                    _id={product._id}
                    name={product.name}
                    imgURL={product.imgURL}
                    price={product.price}
                    keywords={product.keywords}
                    category={product.category}
                  />
                    <button 
                      className="self-center w-24 text-xs px-6 py-1 font-black mb-8 text-orange md:rounded md:border-none md:text-white md:bg-orange bg-black border border-orange"
                      onClick={() => handleDelete(userId, product._id)}
                    >Remove</button>
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

export default WishList;
