import { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ProductCard = (props) => {
  const product = props.product;

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={product.image} />
        <Card.Title>{product.name}</Card.Title>
        {/* <Card.Text>{product.category}</Card.Text> */}
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm={6}>
                In cart: {productQuantity}
              </Form.Label>
              <Col sm={6}>
                <Button
                  sm={6}
                  className="mx-2"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  sm={6}
                  className="mx-2"
                  onClick={() => cart.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="my-2"
              onClick={() => {
                cart.deleteFromCart(product.id);
              }}
            >
              Delete from cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              cart.addOneToCart(product.id);
            }}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
