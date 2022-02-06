import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Glide from '@glidejs/glide';

export default function ProductDetails() {
    useEffect(() => {
        new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 3,
            focusAt: 'center'
        }).mount();
    });

    return (
      <main className="py-3 text-center text-md-start">
          <Container>
            <h2 className="border-bottom text-center text-md-start ">Product Details</h2>
            <Row>
              <Col className="mx-auto">
                <h3>Window Inverter</h3>
              </Col>
              <Col className="text-center text-sm-center mb-2 mb-sm-2 mb-md-0" md="auto">
                <Button className="btn-block">Try</Button>
              </Col>
              <Col className="text-center text-sm-center mb-2 mb-sm-2 mb-md-0" md="auto"> 
                <Button>Order (4.99)</Button>
              </Col>
            </Row>
            <Row>
                <Col>
                    <h3>$4.99</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Info</h4>
                    <section>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit ac nunc eleifend faucibus. Suspendisse ac maximus purus. Praesent efficitur, ex in euismod dignissim, lectus felis iaculis augue, imperdiet tincidunt orci nisl ut ante. Aenean eget efficitur ante. Nunc vulputate nibh sit amet leo ullamcorper vestibulum. Nullam at odio id felis malesuada porttitor. Nam egestas lacinia mollis. Quisque quis ultricies neque, eu maximus eros.
                    </section>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <h4>Trial Info</h4>
                    <section>
                        Etiam ligula purus, bibendum quis sollicitudin vitae, fermentum non tellus. Quisque tincidunt imperdiet mi ac laoreet. Fusce vel felis mi. Ut eget purus ac urna ornare ornare at ut ante. Vestibulum faucibus vel orci nec porta. Pellentesque eget neque ut neque vehicula elementum ut eget orci. 
                    </section>
                </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
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