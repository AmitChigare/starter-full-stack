import React, { useEffect, useState } from "react";
// import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/v1/products/");
      // console.log(data);
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={5} lg={4} xl={3} key={product._id}>
            <h2>{product.name}</h2>
            {/* <Product product={product} /> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
