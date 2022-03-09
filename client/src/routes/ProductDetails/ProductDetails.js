import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router';
import ProductCarousel from '../../ui/ProductCarousel/ProductCarousel';

export default function ProductDetails() {
    const { productName } = useParams();
    const [product, setProduct] = useState([]);
    const [carouselImages, setCarouselImages] = useState([]);
    const location = useLocation();

    const getProduct = async() => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productName}`);
            const jsonData = await response.json();

            setProduct(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getProduct();
    }, [location.key]);

    return (
      <main className="py-3 text-center text-md-start">
          <Container>
            <h2 className="border-bottom text-center text-md-start ">Product Details</h2>
            <Row>
              <Col className="mx-auto">
                <h3>{product.product_name}</h3>
              </Col>
              <Col className="text-center text-sm-center mb-2 mb-sm-2 mb-md-0" md="auto">
                <Button className="btn-block">Try</Button>
              </Col>
              <Col className="text-center text-sm-center mb-2 mb-sm-2 mb-md-0" md="auto"> 
                <Button>Order (${product.product_price})</Button>
              </Col>
            </Row>
            <Row>
                <Col>
                    <h3>${product.product_price}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Info</h4>
                    <section>
                        {product.info}
                    </section>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <h4>Trial Info</h4>
                    <section>
                        {product.trial_info}
                    </section>
                </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <ProductCarousel />
                    </Col>
                </Row>
            <Row className="mt-3">
                <Col className="text-start">
                    <Button>Download Trial</Button>
                </Col>
                <Col className="text-end" >
                    <Button>Order</Button>
                </Col>
            </Row>

          </Container>
      </main>
    );
  }