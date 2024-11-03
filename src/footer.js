import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBFooter,
    MDBCol,
    MDBRow,
    
  } from 'mdb-react-ui-kit';
import './App.css';
import logo1 from './images/logo1.png';

function Footer() {



  return (
    <> 

      {/* //--------------------------footer-------------------------// */}

      <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='twitter' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='google' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='instagram' />
            </a>
          </div>
        </section>

        <section>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon color='secondary' icon='gem' className='me-3' />
                  AARNA ENTERPRISE
                </h6>
                <MDBNavbarBrand href='#'>
                  <img src={logo1} height='80' alt='' loading='lazy' />
                </MDBNavbarBrand>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>Vegetables</a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>Fruits</a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>Spices</a>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>Enqiry</a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>Home</a>
                </p>
                
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon color='secondary' icon='home' className='me-2' />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon color='secondary' icon='envelope' className='me-3' />
                  info@example.com
                </p>
                <p>
                  <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className='text-reset fw-bold' href=''> AARAN_ENTERPRISE </a>
        </div>
      </MDBFooter>
      {/* //-------------------------------footer ends here----------------------// */}
    </>
  );
}

export default Footer;
