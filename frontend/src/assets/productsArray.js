import coffee from "./products/coffee-beans.jpg";
import nuts_1 from "./products/ground-nuts.jpg";
import nuts_2 from "./products/ground-nuts-1.jpg";
import nuts_3 from "./products/ground-nuts-2.jpg";
import maize from "./products/maize.jpg";
import maize_1 from "./products/maize-1.jpg";

const productsArray = [
  {
    id: 1,
    name: "kahawa",
    category: "grains",
    image: coffee,
    price: 2540.0,
  },
  {
    id: 2,
    name: "karanga",
    category: "grains",
    image: nuts_1,
    price: 2540.0,
  },
  {
    id: 3,
    name: "karanga",
    category: "grains",
    image: nuts_2,
    price: 2540.0,
  },
  {
    id: 4,
    name: "vegetables",
    category: "grains",
    image: nuts_3,
    price: 2540.0,
  },
  {
    id: 5,
    name: "mahindi",
    category: "vegetables",
    image: maize,
    price: 2540.0,
  },
  {
    id: 6,
    name: "mahindi",
    category: "vegetables",
    image: maize_1,
    price: 2540.0,
  },
];

const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for id: " + id);
    return undefined;
  }

  return productData;
};

export { productsArray, getProductData };
