import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { productsArray } from "../assets/productsArray.js";
import ProductCard from "../components/ProductCard.jsx";

const Product = () => {
  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product, index) => {
          return (
            <Col key={index} className="g-4">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Product;
