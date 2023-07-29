import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import '../views/css/home.css';




const Home = () => {
   return (
    <div className="logo">
        <>
            <h2><em>Jam Bird is live and ready to go for a ride</em></h2>
            

                <div className="hero-container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 m-auto"
                                src="images/IMG_3170.jpeg"
                                alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 m-auto"
                                src="images/IMG_7536.jpeg"
                                alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 m-auto"
                                src="images/IMG_6012.jpeg"
                                alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                    <br />
                    <br />
                    <div>

                    </div>
                </div>
            


        </>
        </div>



    )
};

export default Home;