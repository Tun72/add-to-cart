import Body from "./Body";
import Header from "./Header";
import Summery from "./Summery";

import Cart from "../components/Cart";
import { useEffect, useState } from "react";

function Main() {
  const [isCart, setIsCart] = useState(false);

  function handelCart() {
    setIsCart((prev) => !prev);
  }

  useEffect(() => {
    if (isCart) document.body.classList.add("active");
    else document.body.classList.remove("active");
  }, [isCart]);
  
  return (
    <section>
      <Header handelCart={handelCart} />
      <Summery />
      <Body />
      {isCart && <Cart onClose={handelCart} />}
      {/* <Modal /> */}
    </section>
  );
}

export default Main;
