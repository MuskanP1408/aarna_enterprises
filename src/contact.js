import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './contact.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import { useState } from 'react';

function Contact() {
  const [formValue, setFormValue] = useState({
    fname: 'name',
    lname: 'surname',
    email: '',
    username: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MDBContainer className='container'>
        <MDBRow className='row_1st'>
          <MDBCol lg='12'>
            <h1>Contact Us Today For Any Query</h1><br></br>
          </MDBCol> 
          <MDBCol lg='12'>
            <MDBValidation className='row g-3'>
              <MDBValidationItem tooltip className='col-md-6'>
                <MDBInput
                  value={formValue.fname}
                  name='fname'
                  onChange={onChange}
                  id='validationCustom01'
                  required
                  label='First name'
                />
              </MDBValidationItem>

              <MDBValidationItem tooltip className='col-md-6'>
                <MDBInput
                  value={formValue.lname}
                  name='lname'
                  onChange={onChange}
                  id='validationCustom02'
                  required
                  label='Last name'
                />
              </MDBValidationItem>

              <MDBValidationItem tooltip feedback='Please provide a valid email.' invalid className='col-md-6'>
                <MDBInput
                  type='email'
                  value={formValue.email}
                  name='email'
                  onChange={onChange}
                  id='validationCustomEmail'
                  required
                  label='Email'
                />
              </MDBValidationItem>

              <MDBValidationItem tooltip feedback='Please provide a valid phone number.' invalid className='col-md-6'>
                <MDBInput
                  value={formValue.phone}
                  name='phone'
                  onChange={onChange}
                  id='validationCustomPhone'
                  required
                  label='Phone Number'
                />
              </MDBValidationItem>

              <MDBValidationItem tooltip className='col-md-6' feedback='Please provide a valid city.' invalid>
                <MDBInput
                  value={formValue.city}
                  name='city'
                  onChange={onChange}
                  id='validationCustom03'
                  required
                  label='City'
                />
              </MDBValidationItem>

              <MDBValidationItem tooltip className='col-md-6' feedback='Please provide a valid zip.' invalid>
                <MDBInput
                  value={formValue.Product}
                  name='Product'
                  onChange={onChange}
                  id='validationCustom05'
                  required
                  label='Product'
                />
              </MDBValidationItem>

              <div className='col-12'>
                <MDBBtn type='submit'>Submit form</MDBBtn>
              </div>
            </MDBValidation>
          </MDBCol>
      </MDBRow>
      </MDBContainer>
      <br>
      </br> <br></br>
    </>
  );
}

export default Contact;
