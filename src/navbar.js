import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdown,

  
} from 'mdb-react-ui-kit';
import './App.css';
import { useState} from 'react';
import logo1 from './images/logo1.png';


function Navbar() {
  const [openNavSecond, setOpenNavSecond] = useState(false);


  return (
    <> 
    {/* //--------------------------navbar--------------------------// */}
      <MDBNavbar expand='lg' light bgColor='light' sticky>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src={logo1} height='50' alt='' loading='lazy' />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavSecond(!openNavSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current='page'>< Link to="/">Home </Link></MDBNavbarLink>
              <MDBNavbarLink>< Link to="/about">About Us </Link></MDBNavbarLink>
              <MDBNavbarItem>
  <MDBDropdown>
    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
       Product
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem link> 
        <Link to="/vegetable" className='text-reset'>Vegetables</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link>
        <Link to="/fruits" className='text-reset'>Fruits</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/spices" className='text-reset'>Spices</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/wheat" className='text-reset'>Wheat Atta</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/biscuits" className='text-reset'>Biscuits & Cookies</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/personalCare" className='text-reset'>Personal Care</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/stationary" className='text-reset'>Stationary & Paper</Link>
      </MDBDropdownItem>
      <MDBDropdownItem link> 
        <Link to="/agarbatti" className='text-reset'>Agarbatti</Link>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</MDBNavbarItem>              <MDBNavbarLink><Link to='/contact'>Contact Us</Link></MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* //----------------------------------navbar ends here----------------------// */}

         </>
  );
}

export default Navbar;