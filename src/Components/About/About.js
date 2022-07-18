import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import'./About.css';

const About = () => {
     return (
          <div>
          <Carousel className="carousel-body">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/skills-learning-personal-development-finance-competency-business-picture-id1319404394?b=1&k=20&m=1319404394&s=170667a&w=0&h=e7hL3jnIwoiQpDRS7TLq0VqR1l_fhUQxfg-B67UvEUI="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/1651380.png"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxwYXBlciUyMGZvciUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="btn-learnMore">
            Learn More
             </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          </div>
     );
};

export default About;