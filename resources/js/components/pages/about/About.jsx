import "./about.css";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import background2 from '../../images/Housing.jpg'
import Container from 'react-bootstrap/Container'
export default function About() {
  return (

<Container fluid="md" style={{marginTop:"100px"}}>
  <Row>
  <Col> <img
                    className="d-block w-100"
                    height={500}
                    src={background2}
                    alt="First slide"
                /></Col>
    <Col style={{marginTop:"110px"}}><h1>About Lunamar</h1>
               <p className="text"  >
                 Lunamar is a huge subdivision which has a lot of buildings. Each
                 building has a lot apartments. Lunamar has beautiful
                 surroundings. We have an experienced team of housing management
                 who will provide you the best services. Lunamar provides variety
                 of services which makes life easier
              </p>
              <a target="_blank" href="https://fxb0881.uta.cloud/" className="hero-btn">
                 Learn More
              </a></Col>
   
  </Row>
</Container>

    // <div >
    //   <div class="column-2">
    //     <div className="m-t-20">
    //       <div className="rows">
    //         {/* <div className="columnss aboutpage-img-width"></div> */}
    //         <div className="inner-container">
    //           <h1>About Lunamar</h1>
    //           <p className="text">
    //             Lunamar is a huge subdivision which has a lot of buildings. Each
    //             building has a lot apartments. Lunamar has beautiful
    //             surroundings. We have an experienced team of housing management
    //             who will provide you the best services. Lunamar provides variety
    //             of services which makes life easier
    //           </p>
   
    //           <a target="_blank" href="https://fxb0881.uta.cloud/" className="hero-btn">
    //             Learn More
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
     
    // </div>
   
  );
}
