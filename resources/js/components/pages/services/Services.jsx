import { Card } from "react-bootstrap"
import "./services.css"

import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function Services() {
    return (
        <div className="service">
    
<h1>Services Lunamar Provides</h1>
<p>Please select from the options below according to your role. </p>
{/* <div class="row">
    <div class="service-col">
        
        <h3><a class="btn btn-link" href="./login">Building/Apartment Management</a></h3>
        <p>Role: Admin, Manager</p>
        <p>Manager can perform CRUD operations to add, delete, edit building, apartments and their owners. An admin can additionally do all the manager related tasks with an addition of report generation. </p>
    </div>
   
    <div class="service-col">
        
        <h3><a class="btn btn-link" href="./login">Gardens/Plants/Pool/Surroundings Management</a></h3>
        <p>Role: Admin, Manager</p>
        <p>Manager can perform CRUD operations to add, delete, edit gardens and plant/pools inside them. Moreover, they can report any incident that has occured in the surrounding. An admin can additionally do all the manager related tasks with an addition of report generation. </p>

    </div>
 <div class="service-col" id="validate">
        <h3><a class="btn btn-link" href="./login">Resident Management</a></h3>
        <p>Role: Resident</p>
        <p>Residents can submit service request for their apartments like electricity, gas, WiFi etc. They can make an apartment related inquiry and chat with the management too.</p>
       
    </div>
    <div class="service-col" id="validate">
        <h3><a class="btn btn-link" href="./contactus">Visitor Management</a></h3>
        <p>Role: Visitor</p>
        <p>Visitors can submit a form for inquiry stating which apartment they want to visit to. They can chat with the management too.</p>
      <p><a href="./"> Chat With us</a></p>
    </div>
  
</div> */}

<Row xs={1} md={2} className="g-4">
          <Col>
            <Card body outline color="success" className="mx-auto my-2 h-100" border="primary" >


            <Card.Header>Role: Admin, Manager</Card.Header>
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i className="fas fa-home fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Apartment Management</h4></Card.Title></Card.Title>
                  
                  
                <Card.Text>
                Manager can perform CRUD operations to add, delete, edit building, apartments and their owners. An admin can additionally do all the manager related tasks with an addition of report generation.
                </Card.Text>
                
              </Card.Body>
              <Card.Footer> <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p></Card.Footer>
              
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2 h-100" border="primary">

            <Card.Header>Role: Visitor</Card.Header>
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-building fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Visitor Management</h4></Card.Title></Card.Title>
                <Card.Text>
                Visitors can submit a form for inquiry stating which apartment they want to visit to. They can chat with the management too.
                </Card.Text>
               
              </Card.Body>
              <Card.Footer> <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p></Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2 h-100" border="primary">
            <Card.Header>Role: Resident</Card.Header>
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-user-friends fa-2x"></i></p>
                  <Card.Title> <h4 style={{ textAlign: 'center' }}>Resident Management</h4></Card.Title></Card.Title>

                <Card.Text>
                Residents can submit service request for their apartments like electricity, gas, WiFi etc. They can make an apartment related inquiry and chat with the management too.
                </Card.Text>
              
              </Card.Body>
              <Card.Footer> <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p></Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2 h-100" border="primary">
            <Card.Header>Role: Admin, Manager</Card.Header>
              <Card.Body>

                <Card.Title><p style={{ textAlign: 'center' }}><i class="far fa-flower-tulip fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Community Management</h4></Card.Title></Card.Title>
                <Card.Text>
                Manager can perform CRUD operations to add, delete, edit gardens and plant/pools inside them. Moreover, they can report any incident that has occured in the surrounding. An admin can additionally do all the manager related tasks with an addition of report generation.
                </Card.Text>
              
              </Card.Body>
              <Card.Footer> <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p></Card.Footer>
            </Card>
          </Col>
        </Row>

</div>


     
    )
}
