import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';

export default function SiteNavbar() {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [itemsInCartAmount, setItemsInCartAmount] = useState(0);

    const populateCart = () => {
        const cartArray = [1, 2, 3]; // this would be retrieved by accessing DB
        setItemsInCart(cartArray);
    };

    useEffect(() => {
        populateCart();
    }, []);

    useEffect(() => {
        setItemsInCartAmount(itemsInCart.length);
    }, [itemsInCart]);
    
    const amountCircle = <div style={{ top: 0, right: 42 }} className="position-absolute">
                            <span style={{width:25, height:25}} className="d-inline-block rounded-circle bg-primary">{ itemsInCartAmount }</span>
                        </div>;
    return (
        <Nav.Item>
            <div className="mx-3">
                <FontAwesomeIcon className="text-primary" size="2x" icon={ faShoppingCart } />
                { (itemsInCart.length > 0) ? amountCircle : '' }                
            </div>
        </Nav.Item>
    );
}