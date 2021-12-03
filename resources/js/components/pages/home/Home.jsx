import Header from '../../header/Header'

import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import img7 from '../../images/img7.png';

import pool from '../../images/pool.jpeg';
import './home.css'

export default function Home() {
  return (
    <>

      <Header />


      <Container style={{marginTop:"40px", background:"#F5F5F5", padding: "30px"}}>
      <Row>
          <Col>
       
          </Col>
          <Col>
        </Col>
        </Row>
        <Row>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={pool} alt="Card image" />
            </Card>


          </Col>
          <Col>
            <h1 style={{color:"#26399c", marginBottom:"20px", fontWeight:"bold"}}>Lunamar Properties</h1>
            <h3 style={{textAlign:"left", marginTop:"5px"}}>We create life-long communities</h3>
            <p className="about-text">Lunamar is a huge subdivision which has 50+ buildings. In 2021, it
              completed it's 10th anniversary. This online portal is it's pilot
              version.Lunamar is a huge subdivision which has 50+ buildings. In 2021, it
              completed it's 10th anniversary. This online portal is it's pilot
              version.</p></Col>
        </Row>
      </Container>

      {/* 
<div className="about" style={{marginBottom:"20px"}}>
      <Card className="bg-dark text-white">
  <Card.Img src={pool} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
</div> */}


      <h2 style={{ textAlign: 'center', marginTop: "10px", color:"#26399c" }} className="font-title">Our Services</h2>
      <hr></hr>
      <div className="home">
        <Container>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">



              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i className="fas fa-home fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Apartment Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whether a property requires any maintenance or a complete onboarding, we get it done.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">


              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-building fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Building Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whenever a building requires any maintenance or tenant issues, Lunar Management is ready to help.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-user-friends fa-2x"></i></p>
                  <Card.Title> <h4 style={{ textAlign: 'center' }}>Visitor Management</h4></Card.Title></Card.Title>

                <Card.Text>
                  Visitors can submit a form for inquiry stating which apartment they want to visit to.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>

                <Card.Title><p style={{ textAlign: 'center' }}><i class="far fa-flower-tulip fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Community Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  A clean community for our residents by managing gardening, pool and other amenities.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>



        {/* <Posts/>
        <Sidebar /> */}

<Row>
<h2 style={{ textAlign: 'center', marginTop: "10px", color:"#26399c" }} className="font-title">Customer Reviews</h2>
<hr></hr>
<Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={img7}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{color:'white', fontStyle: 'italic'}}>Wonderful stay!! I have lived at Lunamar Apartments for 5 years. Living in this community has been a positive experience. The staff from the Property Manager to maintenance have been fantastic. My maintenance needs are completed within the same day. The guys are friendly, polite and professional.</h3>
                    <p style={{color:'white'}}>Alex, Arlingtion</p>
                  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={img7}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3 style={{color:'white', fontStyle: 'italic'}}>Great Experience! lived at Lunamar Apartments for 5 years. Living in this community has been a positive experience. The staff from the Property Manager to maintenance have been fantastic. My maintenance needs are completed within the same day. The guys are friendly, polite and professional.</h3>
                    <p style={{color:'white'}}>Casey, Phoenix</p>
             
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={img7}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color:'white',   fontStyle: 'italic'}}>Superb stay!! I have lived at Lunamar Apartments for 5 years. Living in this community has been a positive experience. The staff from the Property Manager to maintenance have been fantastic. My maintenance needs are completed within the same day. The guys are friendly, polite and professional.</h3>
                <p style={{color:'white'}}>Matt, San Jose</p>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Row>
        </Container>
        
      </div>

    </>
  )
}
