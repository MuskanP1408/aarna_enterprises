import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  
} from 'mdb-react-ui-kit';
import './App.css';
import warehouse from './images/warehouse.jpg'


function About() {



  return (
    <> 
      {/* //-------------------------content ----------------------------------// */}
      <br></br>   <br></br>
      <MDBContainer fluid>
        <center><h1 className='heading'>AARNA ENTERPRISES</h1>
        <MDBRow>
             <MDBCol lg='12'>
        <p className='arrna_welcome'>Welcome to Aaran Enterprises, your trusted source for high-quality grocery products.</p></MDBCol>
        </MDBRow>
        </center>
      </MDBContainer>


      <MDBContainer fluid>
      <img src={warehouse} className='d-block w-100 carousel-image' alt='...' />
      <br></br>  <br></br>
      <MDBRow>
        <MDBCol lg='6'>
            <h2 className='text_head'>Specialization</h2>
             <p>We specialize in a diverse range of fresh fruits, vegetables, and spices, carefully sourced 
             to ensure the best taste and nutrition for our customers. Our commitment to quality and sustainability 
             drives us to partner with local farmers and suppliers, bringing you seasonal produce that supports both
              your health and the community.</p></MDBCol>
              <MDBCol lg='6'>
             <h2 className='text_head'>Quality Product</h2>   
           <p>At Aaran Enterprises, we believe in making healthy eating accessible and enjoyable.
            Whether you're a home cook or a culinary enthusiast, our wide selection caters to all your grocery
             needs. Join us in celebrating freshness and flavor—experience the Aaran difference today!</p></MDBCol>
        </MDBRow> 
      </MDBContainer>







      {/* //------------------------content ends here--------------------------// */}
     

         </>
  );
}

export default About;
