import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

export default function Main() {
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
            <Container className="">
                <h2 className="border-bottom pb-1">Software Offerings</h2>
                <Stack className="mx-auto alt-shade-rows w-75 pb-2" gap={4}>
                    {products.map(product => (
                        <Row key={product.product_id} className="rounded py-2 border-bottom align-items-center">
                            <Col className="text-center text-md-start">
                                <h3>{product.product_name}</h3>
                            </Col>
                            <Col className="text-center text-md-end">
                                <img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/>
                            </Col>
                        </Row>
                    ))}
                </Stack>
                <Row className="border-top pt-2">
                    <Col>
                        <h2>Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non pulvinar justo. Nam et lobortis augue, vel imperdiet orci. Cras gravida gravida metus fringilla pellentesque. Nunc est neque, pretium in eros dictum, suscipit auctor diam. Morbi at erat ullamcorper, commodo nunc ac, blandit nisi. Duis ullamcorper ante porta commodo tristique. Vestibulum pellentesque lorem sed vestibulum consectetur. Integer vel odio ut lectus laoreet tincidunt. Nam auctor sem luctus odio vestibulum laoreet. Curabitur dapibus tellus elit, ac consectetur felis volutpat eget.</p>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

 