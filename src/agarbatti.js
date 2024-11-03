// Agarbatti.js
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import batti from './images/batti.jpg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Agarbatti() {
  return (
    <> 
      {/* //-------------------------content ----------------------------------// */}
      <MDBContainer>
        <center><h1 className='heading'>AGARBATTI</h1></center>
        <br /><br />
        <MDBRow>
          <ProductCard 
            image={batti} 
            label="AGARBATTI" 
          />
        </MDBRow>
        <br /><br />
      </MDBContainer>
      {/* //------------------------content ends here--------------------------// */}
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
            className='img-fluid rounded'
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
      <h3>{label}</h3>
    </MDBCol>
  );
}

export default Agarbatti;
