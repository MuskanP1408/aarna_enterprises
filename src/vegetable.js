import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import onion from './images/onion.jpg';
import chilli from './images/chilli.jpg';
import drumstick3 from './images/drumstick3.webp';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Vegetable() {
  const [hoveredImage, setHoveredImage] = useState(null); // Track which image is hovered
  const navigate = useNavigate(); // Hook to navigate

  return (
    <> 
      <MDBContainer>
        <center><h1 className='heading'>VEGETABLES</h1></center>
        <br />
        <MDBRow>
          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredImage('onion')} 
              onMouseLeave={() => setHoveredImage(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={onion}
                className='img-fluid rounded'
                alt='Onion' 
              />
              {hoveredImage === 'onion' && (
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
            <h3>ONION</h3>     
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredImage('chilli')} 
              onMouseLeave={() => setHoveredImage(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={chilli}
                className='img-fluid rounded'
                alt='Green Chilli'
              />
              {hoveredImage === 'chilli' && (
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
            <h3>GREEN CHILLI</h3>    
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredImage('drumstick')} 
              onMouseLeave={() => setHoveredImage(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={drumstick3}
                className='img-fluid rounded'
                alt='Drumsticks'
              />
              {hoveredImage === 'drumstick' && (
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
            <h3>DRUMSTICKS</h3>     
          </MDBCol>
        </MDBRow>
        <br /><br />
      </MDBContainer>
    </>
  );
}

export default Vegetable;
