import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import grapes from './images/grapes.jpg';
import mangoes2 from './images/mangoes2.jpg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Fruits() {
  return (
    <> 
      <MDBContainer>
        <center><h1 className='heading'>FRUITS</h1></center>
        <br /><br />
        <MDBRow>
          <ProductCard image={mangoes2} title="MANGOES" />
          <ProductCard image={grapes} title="GRAPES" />
        </MDBRow>
        <br /><br />
      </MDBContainer>
    </>
  );
}

function ProductCard({ image, title }) {
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
        <img
          src={image}
          className='img-fluid rounded'
          alt={title} 
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
      </MDBRipple> 
      <br /><br />
      <h3>{title}</h3>     
    </MDBCol>
  );
}

export default Fruits;
