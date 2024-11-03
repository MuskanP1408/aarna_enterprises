import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import paper_book from './images/paper_book.jpeg';
import paper_pen from './images/paper_pen.jpeg';
import paper_diary from './images/paper_diary.jpeg';
import class_pen from './images/class_pen.jpeg';
import class_book from './images/class_book.jpeg';
import class_diary from './images/class_diary.jpeg';
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Stationary() {
  const [hoveredItem, setHoveredItem] = useState(null); // Track which item is hovered
  const navigate = useNavigate(); // Hook to navigate

  return (
    <> 
      <MDBContainer>
        <center><h2 className='heading'>Stationary</h2></center>
        <br />
        <MDBRow>
          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('paper_book')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={paper_book}
                className='img-fluid rounded'
                alt='Book' 
              />
              {hoveredItem === 'paper_book' && (
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
            <h3>BOOK</h3>     
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('paper_pen')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={paper_pen}
                className='img-fluid rounded'
                alt='Pen'
              />
              {hoveredItem === 'paper_pen' && (
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
            <h3>PEN</h3>       
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('paper_diary')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={paper_diary}
                className='img-fluid rounded'
                alt='Diary'
              />
              {hoveredItem === 'paper_diary' && (
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
            <h3>DIARY</h3>      
          </MDBCol>
        </MDBRow>

        <br />
        <MDBRow>
          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('class_book')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={class_book}
                className='img-fluid rounded'
                alt='Notebook' 
              />
              {hoveredItem === 'class_book' && (
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
            <h3>NOTEBOOK</h3>     
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('class_pen')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={class_pen}
                className='img-fluid rounded'
                alt='Pen'
              />
              {hoveredItem === 'class_pen' && (
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
            <h3>PEN</h3>       
          </MDBCol>

          <MDBCol lg='4' md='12'>
            <MDBRipple 
              rippleTag='a' 
              onMouseEnter={() => setHoveredItem('class_diary')} 
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <img
                src={class_diary}
                className='img-fluid rounded'
                alt='Diary'
              />
              {hoveredItem === 'class_diary' && (
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
            <h3>DIARY</h3> 
          </MDBCol>
        </MDBRow>

        <br /><br />
      </MDBContainer>
    </>
  );
}

export default Stationary;
