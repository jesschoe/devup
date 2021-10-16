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
import SignOut from "./screens/SignOut/SignOut"

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      if (user) {
        setUser(user)
        if (user.roles[0] === 'admin') {
          setAdmin(true)
        }
      }

    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} setUser={setUser} admin={admin} />
      </Route>
      <Route exact path="/products">
        <Products user={user} />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail user={user} setUser={setUser} admin={admin}  />
      </Route>
      <Route path="/products/:id/edit">
        {admin ? <ProductEdit user={user} admin={admin} /> : <Redirect to="/products/:id" />}
      </Route>
      <Route path="/add-product">
        {admin ? <ProductCreate user={user} admin={admin} /> : <Redirect to="/products" />}
      </Route>
      <Route path="/signup">
        <SignUp setUser={setUser} />
      </Route>
      <Route path="/signin">
        <SignIn setUser={setUser} />
      </Route>
      <Route path="/signout">
        <SignOut setUser={setUser} />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/:id/wishList">
        <WishList user={user} />
      </Route>
    </div>
  );
}

export default App;
