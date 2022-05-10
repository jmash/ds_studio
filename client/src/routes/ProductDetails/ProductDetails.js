import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router';
import ProductCarousel from '../../ui/ProductCarousel/ProductCarousel';
//http://localhost:5000/productcarousel/${prodJsonData.product_link}`
export default function ProductDetails() {
    const [product, setProduct] = useState([]);
    const [productImages, setProductImages] = useState([]);
    const { productName } = useParams();

    const location = useLocation();

    useEffect(() => {

        const getProduct = async() => {
            try {
                console.log("firing before loading the product");
                const prodResponse = await fetch(`http://localhost:5000/products/${productName}`);
                const prodResponseData = await prodResponse.json();

                setProduct(prodResponseData);
                
            } catch (err) {
                console.error(err.message);
            }
        }
        
        getProduct();
    }, [location.key, productName]);

    useEffect(() => {

        const getCarouselImages = async() => {
            console.log("getting carousel images");
            try {
                if(product.product_name) {
                    console.log("this should fire after loading the product");
                    const carouselResponse = await fetch(`http://localhost:5000/productcarousel/${product.product_name}`);
                    const carouselResponseData = await carouselResponse.json();
                    setProductImages(carouselResponseData);
                    console.log(carouselResponseData);
                }

            } catch (err) {
                console.error(err.message);
            }
        }

        getCarouselImages();
    }, [product]);

    return (
      <main className="py-3 text-center text-md-start">
          <Container>
            <h2 className="border-bottom text-center text-md-start">Product Details</h2>
            <Container className="mx-1">
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
                        <ProductCarousel productLink={product.product_link} productImages={productImages} />
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
          </Container>
      </main>
    );
  }