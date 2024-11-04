import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import fiama_soap from './images/fiama_soap.jpeg';
import fiama_wash from './images/fiama_wash.jpeg';
import fiama_ess from './images/fiama_ess.jpeg';
import fiama_gel from './images/fiama_gel.jpeg';
import fiama_oil from './images/fiama_oil.jpeg';
import fiama_bodywash from './images/fiama_bodywash.jpeg';
import sevlon_wash from './images/savlon_wash.jpeg';
import sevlon_soap from './images/savlon_soap.jpeg';
import sevlon_sani from './images/savlon_sani.jpeg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function PersonalCare() {
  return (
    <> 
      <MDBContainer>
        <center><h1 className='heading'>PERSONAL CARE</h1></center>
        <br /><br />
        <MDBRow>
          <ProductCard image={fiama_soap} title="FIAMA SOAP" />
          <ProductCard image={fiama_ess} title="FIAMA ESSENTIAL OIL" />
          <ProductCard image={fiama_wash} title="FIAMA WASH" />
        </MDBRow>

        <br /><br />
        <MDBRow>
          <ProductCard image={fiama_gel} title="FIAMA GEL" />
          <ProductCard image={fiama_oil} title="FIAMA OIL" />
          <ProductCard image={fiama_bodywash} title="FIAMA BODYWASH" />
        </MDBRow>

        <br /><br />
        <MDBRow>
          <ProductCard image={sevlon_wash} title="SEVLON HANDWASH" />
          <ProductCard image={sevlon_soap} title="SEVLON SOAP" />
          <ProductCard image={sevlon_sani} title="SEVLON SANITIZER" />
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

export default PersonalCare;
