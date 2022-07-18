import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
     const [services , setServices] = useState([]);
     useEffect(()=>{
          fetch('./mainServices.json')
          .then(res=> res.json())
          .then(data => setServices(data))
     },[])
     
     return (
          <div>
               <div className="head-part">
                 <h1>Learn with us</h1>
                 <h3>Elevating learning with intelligent textbooks</h3>
                <p>It is an award-winning digital publisher which combines the power of technology and textbooks</p>
                <h1>Our Core Services</h1>
               </div>
               <div className="individual-service">
               {
                    services.map(service => <Service service={service}></Service>)
               }
                 
                    
               </div>
          </div>
     );
};

export default Home;