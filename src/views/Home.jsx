import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { useState } from 'react';
import MailchimpForm from '../components/MailchimpForm';

const Home = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(true);
    };

    return (
        <>
            <div className="container">
                <Carousel className='text-center'>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src="images/IMG_3170.jpeg"
                            alt="First slide" />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src="images/IMG_6010.jpeg"
                            alt="Second slide" />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-50"
                            src="images/IMG_6012.jpeg"
                            alt="Third slide" />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <div>

                {!subscribed && <MailchimpForm onSubscribe={handleSubscribe} />}
            </div>


        </>



    )
};

export default Home;