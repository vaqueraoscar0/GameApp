import React from 'react';
import {Carousel} from 'react-bootstrap'


const CarouselComponent = () =>{
    return (
    <Carousel variant="dark">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/391133.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn1.dotesports.com/wp-content/uploads/2019/03/18145802/14201336210_d73680714d_o.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.prismic.io/play-vs/6c423286e877921fb6659122b16e1845df833e1f_league-of-legends-hero-splash.jpg?auto=compress,format"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselComponent;