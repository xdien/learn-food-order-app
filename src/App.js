import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandle = () =>{
    setCartIsShow(true);
  }
  const hiddenCartHandle = () =>{
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hiddenCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
