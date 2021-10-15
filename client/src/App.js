import "./App.css";
import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import Home from "./screens/Home/Home";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import ProductCreate from "./screens/ProductCreate/ProductCreate";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import AboutUs from "./screens/AboutUs/AboutUs";
import Products from "./screens/Products/Products";
import Blog from "./screens/Blog/Blog";
import WishList from "./screens/WishList/WishList";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      if (user) {
        setUser(user)
        if (user.roles[0] === 'admin') {
          setAdmin(prev => !prev)
        }
      }

    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} admin={admin} />
      </Route>
      <Route exact path="/products">
        <Products user={user} />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail user={user} admin={admin} />
      </Route>
      <Route path="/products/:id/edit">
        {admin ? <ProductEdit user={user} /> : <Redirect to="/products/:id" />}
      </Route>
      <Route path="/add-product">
        {admin ? <ProductCreate user={user} /> : <Redirect to="/add-product" />}
      </Route>
      <Route path="/signup">
        <SignUp setUser={setUser} />
      </Route>
      <Route path="/signin">
        <SignIn setUser={setUser} />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/:id/wishList">
        <WishList />
      </Route>
    </div>
  );
}

export default App;
