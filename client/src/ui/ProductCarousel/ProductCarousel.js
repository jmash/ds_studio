import React, { useEffect } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Glide from '@glidejs/glide';

export default function ProductCarousel() {
    useEffect(() => {
        new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 3,
            focusAt: 'center'
        }).mount();
    }, []);

    const getProduct = async() => {
        try {
            const response = await fetch(`http://localhost:5000/productcarousel/${productName}`);
            const jsonData = await response.json();

            setProduct(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                    <li className="glide__slide"><img src="https://via.placeholder.com/150" alt="Window Inverter Thumbnail"/></li>
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
                <button className="glide__bullet" data-glide-dir="=3"></button>
                <button className="glide__bullet" data-glide-dir="=4"></button>
                <button className="glide__bullet" data-glide-dir="=5"></button>
                <button className="glide__bullet" data-glide-dir="=6"></button>
            </div>
        </div>
    )
}
