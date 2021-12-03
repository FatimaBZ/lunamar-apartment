import "./adminHome.css";
import { useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function AdminHome() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const data = { users: 100, visitors: 22, openRequests: 50, incidents: 35, totalApartments: 30, ownedApartments: 20, totalBuildings: 500, totalGarden: 20, totalPlants: 36 };
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardData",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(res => res.json())
    .then(
   
        (result)=>{
          console.log(result);
            setData(result)
        }
    )
},[]);
  return (
    <div className="AdminHome">
      <section className="adminheader">
        <div className="text-box">
          <span><h2>Admin Dashboard</h2>

        <div><Button variant="primary" onClick={handleShow}>
          Manage
        </Button></div>
        </span>
          {/* <h3>Click On the below links to view details for each Owner, User, Visitor</h3> */}

          {/* <p>User Details   <a href="/userDetails">Click to view</a>Service Requested   <a href="/service_request_details">Click to view</a></p>
          <p>Owned Apartments  <a href="/OwnerDetails">Click to view</a> All Buildings<a href="/building_details">Click to view</a></p>
          <p>All Buildings  <a href="/building_details">Click to view</a>All Apartments   <a href="/apartment_details">Click to view</a></p>

          <p>Visitor Dashboard   <a href="/visitor_details">Click to view</a>Incident Reported   <a href="/incident_details">Click to view</a></p>
          <p>Garden Details<a href="/garden_details">Click to view</a> Plant List<a href="/plant_details"> Click to View</a></p> */}
          {/* <p>You Can Also Perform CRUD.</p> */}

        </div>
        {/* </section>
      <section className="adminservice"> */}


        <div className="admin-dashboard">
          <Row xs={1} md={4} className="g-4">

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="primary">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.users}</h1></Card.Title></Card.Title>
                  <Card.Text>
                    Total Users
                  </Card.Text>
                  <a href="/userDetails">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="secondary">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>  {data.visitors}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Visitors
                  </Card.Text>
                  <a href="/visitor_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="success">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.openRequests}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Service Requests
                  </Card.Text>
                  <a href="/service_request_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="danger">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.incidents}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Incidents
                  </Card.Text>
                  <a href="/incident_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="warning">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.totalApartments}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Apartments
                  </Card.Text>
                  <a href="/apartment_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="info">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}> {data.ownedApartments}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Owned Apartments
                  </Card.Text>
                  <a href="/OwnerDetails">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" style={{ background: "#3D9970" }}>
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.totalBuildings}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Buildings
                  </Card.Text>
                  <a href="/building_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card body outline color="success" className="mx-auto my-2" border="primary" bg="dark">
                <Card.Body>
                  <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                    <Card.Title><h1 style={{ textAlign: 'center' }}>{data.totalGarden}</h1></Card.Title></Card.Title>
                  <Card.Text>

                    Total Garden
                  </Card.Text>
                  <a href="/garden_details">Click to view</a>
                </Card.Body>
              </Card>
            </Col>






          </Row>
        </div>














       

        <Offcanvas show={show} onHide={handleClose} placement="end" name="end" >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin Management</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row xs={1} md={1} className="g-4">

              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">


                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                      <Card.Title><h4 style={{ textAlign: 'center' }}>Register Buildings</h4></Card.Title></Card.Title>
                    <Card.Text>
                      Whenever a building requires any maintenance or tenant issues, Lunar Management is ready to help.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/admin_building_crud"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>


              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">
                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-building fa-2x"></i></p>
                      <Card.Title> <h4 style={{ textAlign: 'center' }}>Register/Manage Apartment</h4></Card.Title></Card.Title>

                    <Card.Text>
                      Admin can register a new apartment.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/admin_owner_crud"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>


              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">
                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i className="fas fa-tools fa-2x"></i></p>
                      <Card.Title><h4 style={{ textAlign: 'center' }}> Register/Manage Garden and Plant</h4></Card.Title></Card.Title>
                    <Card.Text>
                      Whether a property requires any maintenance or a complete onboarding, we get it done.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/admin_garden_crud"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">
                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-user-friends  fa-2x"></i></p>
                      <Card.Title> <h4 style={{ textAlign: 'center' }}>Register/Manage Visitor</h4></Card.Title></Card.Title>

                    <Card.Text>
                    Admin can register/manage Visitors.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/admin_visitor_crud"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">
                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                      <Card.Title> <h4 style={{ textAlign: 'center' }}>Register/Manage Manager</h4></Card.Title></Card.Title>

                    <Card.Text>
                      Admin can register/manage Managers.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/crud_manager"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card body outline color="success" className="mx-auto my-2" border="primary">
                  <Card.Body>
                    <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-list fa-2x"></i></p>
                      <Card.Title> <h4 style={{ textAlign: 'center' }}>Manage Resident</h4></Card.Title></Card.Title>

                    <Card.Text>
                    Admin can take action for the incidents reported by and service requests submitted by residents.
                    </Card.Text>
                    <p style={{ textAlign: 'center' }}><a href="/manager_incident"> <Button variant="primary">Click here</Button> </a> </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-comments fa-2x"></i></p>
                  <Card.Title> <h4 style={{ textAlign: 'center' }}>Chat With Us</h4></Card.Title></Card.Title>

                <Card.Text>
                  Click to Chat.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/join"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>

            </Row>
          </Offcanvas.Body>
        </Offcanvas>








        {/* <div className="row">
        {/* <div className="service-col" id="validate">
            <h3>
              <a href="/admin_dashboard">
                <a>
                Dashboard
                <p id="details"><a href="./">View User Details</a></p>
                <p><a href="./">View Owner Details</a></p>
                <p><a href="./">View Owner Details</a></p>
              </a>
            </h3>
          </div> */}
        {/* <div class="divider"/>
          <div className="service-col">
            <h3>
              <a className="btn btn-link" href="/admin_building_crud">
                Register Buildings
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col">
            <h3>
              <a href="/admin_owner_crud">
                Register Apartment and it's Owner
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_garden_crud">
                Register/Manage Garden and Plant
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/admin_visitor_crud">
                Register/Manage Visitor
              </a>
            </h3>
          </div>
          <div class="divider"/>
          <div className="service-col" id="validate">
            <h3>
              <a href="/crud_manager">
                Register/Manage Manager
              </a>
            </h3>
          </div>
        </div> */}
      </section>
    </div>
  );
}
