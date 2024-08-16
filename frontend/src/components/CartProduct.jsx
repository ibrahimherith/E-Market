import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../assets/productsArray.js";

const CartProduct = ({ id, quantity }) => {
  const cart = useContext(CartContext);

  const productData = getProductData(id);

  return (
    <>
      <h5>{productData.name}</h5>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
};

export default CartProduct;
