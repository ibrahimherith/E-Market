import React from "react";
import Hero from "../components/Hero";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return <>{userInfo ? <Product /> : <Hero />}</>;
};

export default Home;
