
import Carousel from 'react-bootstrap/Carousel';
import '../views/css/home.css';
import { Link } from "react-router-dom";




const Home = () => {
    return (

        <>
        
        <div className="logo">
                <div className="hero-container">
                    <Carousel style={{ width:'65rem'}}>
                    <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/color_noback Background Removed.png"
                                alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_3170.jpeg"
                                alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_7536.jpeg"
                                alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_6012.jpeg"
                                alt="Fourth slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/IMG_8221.jpeg"
                                alt="Fifth slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50 m-auto"
                                src="images/best_banana.jpeg"
                                alt="Sixth slide" />
                        </Carousel.Item>
                    </Carousel>
                    <br />
                    <br />
                    <div>

                    </div>
                
            </div>
            </div>
            <br />
            
            <h2><i>Jambird is live and ready to go for a ride!</i></h2>
            <div className='box'>
            <Link className="btn btn-info" to="/about">Click Here To Learn More</Link>
            </div>
           
        </>




    )
};

export default Home;