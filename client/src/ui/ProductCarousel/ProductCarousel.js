import React, { useEffect } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Glide from '@glidejs/glide';
import PropTypes from 'prop-types';

export default function ProductCarousel(props) {

    useEffect(() => {
        new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 3,
            focusAt: 'center'
        }).mount();
    }, [props.productImages]);

    return (
        <div className="glide">
            <h1>{ props.productImages[4] }</h1>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    { props.productImages.map((productImage, index) => (
                        <li key={ index } className="glide__slide"><img width={150} src={`http://localhost:5000/product_carousel/${props.productLink}/${productImage}`} alt="Window Inverter Thumbnail"/></li>
                    ))}
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
        </div>
    )
}

ProductCarousel.propTypes = {
    productLink: PropTypes.string
}