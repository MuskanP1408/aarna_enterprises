// Biscuits.js
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './product.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import bounce from './images/bounce.jpeg';
import milk_bis from './images/milk_bis.jpeg';
import moms from './images/moms.jpeg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Biscuits() {
  return (
    <> 
      <MDBContainer className='container'>
        <center><h1 className='heading'>BISCUITS & COOKIES</h1></center>
        <br /><br />
        <MDBRow>
          {[ 
            { src: moms, label: "Mom's Magic" },
            { src: bounce, label: "BOUNCE" },
            { src: milk_bis, label: "MILK BISCUIT" },
          ].map((item, index) => (
            <ProductCard key={index} image={item.src} label={item.label} />
          ))}
        </MDBRow>
        <br /><br />
      </MDBContainer>
    </>
  );
}

function ProductCard({ image, label }) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const navigate = useNavigate(); // Hook to navigate

  return (
    <MDBCol lg='4' md='12'>
      <MDBRipple 
        rippleTag='a' 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <div className="image-container">
          <img
            src={image}
            className='img-fluid rounded image-responsive'
            alt={label} 
          />
          {isHovered && (
            <MDBBtn 
              color='light' 
              className="enquiry-button"
              onClick={() => navigate('/contact')} // Navigate to the Contact page
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'opacity 0.3s ease',
                color: 'blue'
              }}
            >
              Enquiry
            </MDBBtn>
          )}
        </div>
      </MDBRipple>
      <br /><br />
      <h3 className='label'>{label}</h3>
    </MDBCol>
  );
}

export default Biscuits;
