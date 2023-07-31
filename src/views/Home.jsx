import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import '../views/css/home.css';
import { Button } from 'react-bootstrap';




const Home = () => {
    return (

        <>
            <div className="logo">
                <div className="hero-container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_3170.jpeg"
                                alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_7536.jpeg"
                                alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_6012.jpeg"
                                alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                    <br />
                    <br />
                    <div>

                    </div>
                
            </div>
            </div>
            <br />
            
            <h2><i>Jam Bird is live and ready to go for a ride!</i></h2>
            <div className='box'>
            <Button variant="info">Click Here To Learn More</Button>
            </div>
        </>




    )
};

export default Home;