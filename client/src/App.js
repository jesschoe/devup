import './App.css';
import { Route } from "react-router-dom"
import Home from "./screens/Home/Home"
import Products from "./screens/Products/Products"
import ProductDetail from "./screens/ProductDetail/ProductDetail"
import ProductEdit from "./screens/ProductEdit/ProductEdit"
import ProductCreate from "./screens/ProductCreate/ProductCreate"
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/products/:id">
        <ProductDetail />
      </Route>
      <Route path="/products/:id/edit">
        <ProductEdit />
      </Route>
      <Route path="/add-product">
        <ProductCreate />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </div>
  );
}

export default App;
