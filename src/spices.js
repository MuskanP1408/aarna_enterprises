import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import cardamom from './images/cardamom.jpg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Spices() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const navigate = useNavigate(); // Hook to navigate

  return (
    <> 
      <MDBContainer>
        <center><h1 className='heading'>SPICES</h1></center>
        <br /><br />
        <MDBRow>
          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={cardamom}
                className='img-fluid rounded'
                alt='Cardamom' 
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
            <h3>CARDAMOM</h3>     
          </MDBCol>

          {/* Uncomment if you want to add more spices */}
          {/* <MDBCol lg='4' md='12'>
            <MDBRipple rippleTag='a'>
              <img
                src={chilli}
                className='img-fluid rounded'
                alt='Green Chilli'
              />
              <center><h3>GREEN CHILLI</h3></center>       
            </MDBRipple> 
            <br /><br />
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple rippleTag='a'>
              <img
                src={drumstick3}
                className='img-fluid rounded'
                alt='Drumsticks'
              />
              <center><h3>DRUMSTICKS</h3></center>       
            </MDBRipple> 
            <br /><br />
          </MDBCol> */}
        </MDBRow>
        <br /><br />
      </MDBContainer>
    </>
  );
}

export default Spices;
