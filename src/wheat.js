import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import atta from './images/atta.webp';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Wheat() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <> 
      <MDBContainer>
        <center><h1 className='heading'>Wheat Flour</h1></center>
        <br />
        <MDBRow>
          <MDBCol lg='4' md='12' style={{ position: 'relative' }}>
            <MDBRipple 
              rippleTag='a'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ display: 'inline-block', position: 'relative' }}
            >
              <img
                src={atta}
                className='img-fluid rounded'
                alt='Wheat Flour' 
              />
              {isHovered && (
                <MDBBtn 
                  color='light' 
                  className="enquiry-button"
                  onClick={() => navigate('/contact')} // Navigate to contact page
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
            <h3>Wheat Flour</h3>     
          </MDBCol>
        </MDBRow>
        <br />
      </MDBContainer>
    </>
  );
}

export default Wheat;
