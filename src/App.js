import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import CartCtxProvider from "./store/CartCtxProvider";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }
  return (
    <CartCtxProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartCtxProvider>
  );
}

export default App;
