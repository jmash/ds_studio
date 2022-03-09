import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

export default function Order() {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const jsonData = await response.json();

            setProducts(jsonData);
            console.log(jsonData);
            console.log(document.location);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
      <main className="py-3">
        <Container>
            <h2 className="border-bottom text-center text-md-start text-center">Order</h2>
            <Stack className="alt-shade-rows px-3" gap={3}>
                {products.map(product => (
                    <Row key={product.product_id} className="rounded">
                        <Col className="text-center text-sm-center text-md-start">
                            <h3 className="mb-2 mt-2">{product.product_name}</h3> 
                        </Col>
                        <Col className="my-auto py-2 py-md-0 text-center text-sm-center text-md-start" md="auto">
                            <Button>Add To Cart</Button>
                        </Col>
                        <Col className="my-auto py-2 py-md-0 text-center text-sm-center text-md-start" md="auto">
                            <Button>Buy Now</Button>
                        </Col>
                    </Row>
                ))}
            </Stack>
        </Container>
      </main>
    );
}