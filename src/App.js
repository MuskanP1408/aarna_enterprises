import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
  MDBCarouselCaption,
  
} from 'mdb-react-ui-kit';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import vegies from './images/vegies.jpg';
import fruits from './images/fruits.jpg';
import spices from './images/spices.jpg';
import fruits5 from './images/fruits5.jpg';
import vegies4 from './images/vegies4.jpg';
import spices4 from './images/spices4.jpg';
// import price from './images/price.jpeg'
// import premium from './images/premium.png'
// import customer from './images/customer.jpg'

import costB2 from './images/costB2.png'
import premiumQ1 from './images/premiumQ1.png'
import customerf from './images/customerf.png'
import Classmate_logo from './images/Classmate_logo.webp';
import Aashirvaad_Logo from './images/Aashirvaad_Logo.png';
import bNatural_logo from './images/bNatural_logo.jpeg';
import Fiama_Logo from './images/Fiama_Logo.jpg';
import managl_logo from './images/managl_logo.png';
import paperKraft_logo from './images/paperKraft_logo.jpeg';
import savlon_logo from './images/savlon_logo.png';

function App() {
  const [visibleImages, setVisibleImages] = useState([]);
  const imageRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card index

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleImages = [];
      imageRefs.current.forEach((imgRef, index) => {
        if (imgRef && imgRef.getBoundingClientRect().top < window.innerHeight) {
          newVisibleImages.push(index);
        }
      });
      setVisibleImages(newVisibleImages);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (hoveredCard !== null) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredCard]);

  const getTransformStyle = (index) => {
    if (hoveredCard !== index) {
      return {
        transform: 'translate(0px, 0px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.1s ease-out',
      };
    }

    const offsetX = (mousePosition.x - window.innerWidth / 2) / 20;
    const offsetY = (mousePosition.y - window.innerHeight / 2) / 20;
    const rotateX = (mousePosition.y - window.innerHeight / 2) / 20;
    const rotateY = (mousePosition.x - window.innerWidth / 2) / 20;

    return {
      transform: `translate(${offsetX}px, ${offsetY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease-out',
    };
  };

  // Card data
  const cards = [
    { image: costB2, text: 'COST BENEFITS' },
    { image: premiumQ1, text: 'PREMIUM QUALITY' },
    { image: customerf, text: 'CUSTOMER FOCUS' },
  ];

  const products = [
    { 
      src: vegies4, 
      labels: [
        <h1 key="benefits" >VEGGIES BENEFITS</h1>,
        <h5 key="benefit-text">"Vegetables are nutrient-rich, providing essential vitamins and minerals while being low in calories. Their high fiber content supports digestion and helps reduce the risk of chronic diseases, promoting overall health."</h5>
      ]
    }, 
    { src: fruits5, 
      label: [
        <h1 key="benefits" className='benefits_key'>FRUITS BENEFITS</h1>,
        <h5 key="benefit-text" className='text_key'>"Fruits are packed with essential vitamins, minerals, and antioxidants that support overall health and boost the immune system. They also provide natural sweetness and fiber, promoting digestive health and helping to maintain a healthy weight."</h5>

  ]}, 
    { src: spices4, 
      label:[
        <h1 key="benefits" className='benefits_key'>SPICES BENEFITS</h1>,
        <h5 key="benefit-text"  className='text_key'>"Spices not only enhance the flavor of dishes but also offer numerous health benefits, including anti-inflammatory and antioxidant properties. Many spices can aid digestion, improve metabolism, and even support heart health."</h5>

      ]}
  ];

  //-------------------------dropdown list ------------------------------------//
  const navigate = useNavigate();


  return (
    <>
      <MDBContainer fluid>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img src={vegies} className='d-block w-100 carousel-img' alt='...' />
            <MDBCarouselCaption>
          <h4>VEGITABLES</h4>
          <p>"Explore fresh, seasonal vegetables that bring vibrant flavors and nutritious
             goodness to your table!"</p>
        </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img src={fruits} className='d-block w-100 carousel-img' alt='...' />
            <MDBCarouselCaption>
          <h4>FRUITS</h4>
          <p>"Indulge in handpicked selection of juicy, ripe fruits that burst with flavor and nutrition!"</p>
        </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img src={spices} className='d-block w-100 carousel-img' alt='...' />
            <MDBCarouselCaption>
          <h4>SPICES</h4>
          <p>"Unlock a world of flavor with premium spices, expertly sourced to elevate every dish!"</p>
        </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
      <br></br>
      <br></br>

    {/* //-------------------product slides-----------------------// */}

        <MDBContainer fluid className='product_container'>
  <MDBRow>
    <h1 className='product'><center>OUR PRODUCTS</center></h1>
    <br/><br/><br/><br/><br/>
    {products.map((product, index) => (
      <MDBCol key={index} lg='4' md='12' className='mb-4 image-container' ref={el => imageRefs.current[index] = el}>
        <div className="position-relative">
          <img
            src={product.src}
            className={`img-fluid shadow-2-strong rounded-4 image ${visibleImages.includes(index) ? 'visible' : ''}`}
            alt={product.label}
          />
          <div className="image-overlay">
            {product.labels ? product.labels.map((label, i) => (
              <div key={i} className={`text-overlay float-up  ${i === 0 ? 'benefit-heading' : 'benefit-text'}`}>{label}</div>
            )) : <h5 className="text-overlay float-up">{product.label}</h5>}
          </div>
        </div>
      </MDBCol>
    ))}
  </MDBRow>
</MDBContainer>
      <br></br>
      <br></br>

  {/* //-----------------------product slide ends here-------------------// */}

  
{/* //---------------------------------welcome note-----------------------// */}
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol lg='12' className='mb-2'>
            <h1 className='about_us'><center>ABOUT AARNA ENTERPRISES</center></h1>
            <br></br>
            <p>Welcome to our vibrant online hub for fresh vegetables, fruits, and spices! 
              Discover a world of flavors with our carefully curated selection, featuring seasonal produce and
              exotic spices. Whether you’re looking for delicious recipes, cooking tips, or gardening advice, 
              we have everything to inspire your culinary adventures. Join our community and elevate your cooking
              with the freshest ingredients nature has to offer!</p>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        <br></br>

        {/* //------------------welcome note ends here---------------------------// */}
    
{/* //------------------------------------why choose us ---------------------------// */}
      <MDBContainer bgColor='dark'> 
        <center><h1>WHY CHOOSE US</h1></center>
        <MDBRow className='card-container'>
  {cards.map((card, index) => (
    <MDBCol lg='4' md='12' key={index} className='mb-4'>
      <MDBCard 
        className="position-relative card" // Add card class here
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <MDBCardImage
          src={card.image}
          alt='...'
          position='top'
          className='card-image'
          style={getTransformStyle(index)}
        />
        <MDBCardBody>
          <MDBCardText className="card-text">
            {card.text}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  ))}
</MDBRow>

      </MDBContainer>

      {/* //-------------------------why choose us ends here---------------// */}


{/* //------------------brand ----------------------// */}
<MDBContainer bgColor='dark'>
      <center>
        <h1>BRANDS WE DEAL IN</h1>
        <MDBCarousel showControls>
          <MDBCarouselItem itemId={1}>
            <div className="carousel-image-container">
              <img src={Aashirvaad_Logo} className='carousel-image' alt='Aashirvaad Logo' />
              <img src={savlon_logo} className='carousel-image' alt='savlon Logo' />
            </div>
            <div className="carousel-image-container">
              <img src={Classmate_logo} className='carousel-image' alt='Classmate Logo' />
              <img src={bNatural_logo} className='carousel-image' alt='bNatural Logo' />
            </div>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <div className="carousel-image-container">
              <img src={managl_logo} className='carousel-image' alt='managl Logo' />
              <img src={paperKraft_logo} className='carousel-image' alt='paperKraft Logo' />
            </div>
            <div className="carousel-image-container">
            <img src={Fiama_Logo} className='carousel-image' alt='Fiama Logo' />
              {/* Add more images if needed */}
            </div>
          </MDBCarouselItem>
          {/* Add more MDBCarouselItem here if needed */}
        </MDBCarousel>
      </center>
    </MDBContainer>
 <br></br>
      <br></br>

      {/* //----------------------brand end here----------------------------// */}


     
    </>
  );
}

export default App;
