import "./App.css";
import ItemListContainer from "./components/itemListContainer";
import { NavBar } from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/itemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              Hola
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
