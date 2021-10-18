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
import Resources from "./screens/Resources/Resources";
import Products from "./screens/Products/Products";
import Blog from "./screens/Blog/Blog";
import WishList from "./screens/WishList/WishList";
import SignOut from "./screens/SignOut/SignOut"
import EditPost from "./screens/Blog/EditPost";


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
        <Products user={user} admin={admin} />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail user={user} setUser={setUser} admin={admin} />
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
        <SignIn setUser={setUser} setAdmin={setAdmin}/>
      </Route>
      <Route path="/signout">
        <SignOut setUser={setUser} />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
      <Route exact path="/blog">
        <Blog user={user} admin={admin} />
      </Route>
      <Route exact path="/blog/edit/:id">
        <EditPost user={user} admin={admin} />
      </Route>
      <Route exact path="/:userId/wishlist">
        <WishList user={user} />
      </Route>
    </div>
  );
}

export default App;
