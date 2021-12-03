import "./VisitorHome.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function VisitorHome() {
  return (
    <div className="VisitorHome">
      {/* <section className="residentheader"> */}
        
      {/* </section> */}
      <section className="service">
        {/* <h1>.</h1> */}
        <div className="text-box">
          <h1>Hi Visitor!</h1>
          <p>To Proceed Please Select From The Options Below</p>
        </div>


        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">



              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i className="fas fa-home fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Visit Apartment</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whether a property requires any maintenance or a complete onboarding, we get it done.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/visitor_Apt"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">


              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="far fa-flower-tulip fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Visit Garden</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whenever a building requires any maintenance or tenant issues, Lunar Management is ready to help.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/visitor_Garden"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-comments fa-2x"></i></p>
                  <Card.Title> <h4 style={{ textAlign: 'center' }}>Chat With Us</h4></Card.Title></Card.Title>

                <Card.Text>
                  Visitors can submit a form for inquiry stating which apartment they want to visit to.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/join"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>

        </Row>



 
        {/* <div className="row">
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/visitor_Apt">
                Visit Apartment
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/visitor_Garden">
                Visit Garden
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/chatwithus">
                Chat With Us
              </a>
            </h3>
          </div>
        </div> */}
      </section>
    </div> 
  );
}
