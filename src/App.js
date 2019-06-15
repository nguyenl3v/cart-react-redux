import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

function App() {
  return (
    <React.Fragment>
        <Header />
        <ProductsContainer />
        <MessageContainer />
        <CartContainer />
        <Footer />
    </React.Fragment>
  );
}

export default App;
