import './header.css';
import background from '../images/background.jpeg';
import background2 from '../images/apartment4.jpg';
import background3 from '../images/apartment1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (


        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={background2}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h1 style={{color:'black'}}>Welcome To Lunamar</h1>
                    <p style={{color:'white'}}>We Deliver Exceptional Living Experiences</p>
                    <div className="mb-2">
                        <a href="/login">
                            <Button variant="primary" size="lg">
                                Click To Login
                            </Button>{' '}
                        </a>
                        <a href="/register">
                            <Button variant="secondary" size="lg">
                                Click To Register
                            </Button>
                        </a>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={background}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1 style={{color:'black'}}>Welcome To Lunamar</h1>
                    <p style={{color:'white'}}>We Deliver Exceptional Living Experiences</p>
                <div className="mb-2">
                        <a href="/login">
                            <Button variant="primary" size="lg">
                                Click To Login
                            </Button>{' '}
                        </a>
                        <a href="/register">
                            <Button variant="secondary" size="lg">
                                Click To Register
                            </Button>
                        </a>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={500}
                    src={background3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h1 style={{color:'black'}}>Welcome To Lunamar</h1>
                <p style={{color:'white'}}>We Deliver Exceptional Living Experiences</p>
                <div className="mb-2">
                        <a href="/login">
                            <Button variant="primary" size="lg">
                                Click To Login
                            </Button>{' '}
                        </a>
                        <a href="/register">
                            <Button variant="secondary" size="lg">
                                Click To Register
                            </Button>
                        </a>

                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
}
