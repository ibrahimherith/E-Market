import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <ToastContainer />
        <Container>
          <Outlet />
        </Container>
      </CartProvider>
    </>
  );
};

export default App;
