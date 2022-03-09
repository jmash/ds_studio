import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SiteNavbar() {
    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const jsonData = await response.json();

            setProducts(jsonData);
            // console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Navbar className="pt-0 pb-0 shadow-sm justify-content-center text-center">
          <NavDropdown className="border-start border-end" title="Software" id="nav-software">
            {products.map(product => (
              <NavDropdown.Item as="span" eventKey={`1.${product.product_id}`} key={`${product.product_id}`}>
                <Link to={`/productdetails/${product.product_link}`}>{product.product_name}</Link>
              </NavDropdown.Item>
            ))}
            
          </NavDropdown>
          <Nav.Item>
            <Nav.Link as={Link} to="/support" eventKey="2">
              <span>Support</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="border-start border-end">
            <Nav.Link as={Link} to="/order" eventKey="3">
              <span>Order</span>
            </Nav.Link>
          </Nav.Item>
        </Navbar>
    );
}

