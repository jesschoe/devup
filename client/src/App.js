import './App.css';
import { useState, useEffect } from 'react'
import { Route, Redirect } from "react-router-dom"
import { verifyUser } from './services/users';
import Home from "./screens/Home/Home"
import ProductDetail from "./screens/ProductDetail/ProductDetail"
import ProductEdit from "./screens/ProductEdit/ProductEdit"
import ProductCreate from "./screens/ProductCreate/ProductCreate"
import SignUp from "./screens/SignUp/SignUp"
import SignIn from "./screens/SignIn/SignIn"
import Products from './screens/Products/Products';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} />
      </Route>
      <Route exact path="/products">
        <Products user={user} />
      </Route>
      <Route exact path="/products/:id">
        <ProductDetail user={user} />
      </Route>
      <Route path="/products/:id/edit">
        {user ? <ProductEdit user={user} /> : <Redirect to='/products/:id' />}
      </Route>
      <Route path="/add-product">
        {user ? <ProductCreate user={user} /> : <Redirect to='signup' />}
      </Route>
      <Route path="/signup">
        <SignUp setUser={setUser} />
      </Route>
      <Route path="/signin">
        <SignIn setUser={setUser} />
      </Route>
    </div>
  );
}

export default App;
