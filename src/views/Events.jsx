import MailchimpForm from '../components/MailchimpForm';
import { useState } from 'react';
import '../views/css/about.css'


const Events = () => {
    const [subscribed, setSubscribed] = useState(false);
  
    const handleSubscribe = () => {
      setSubscribed(true);
    };
    return (
        <>
        <br />
        <br />
        <div className='container  w-50 m-auto'>
        <h2>There are currently no events scheduled, by subscribing you will be the first to know when the next event is!</h2>
        </div>
        <div className='logo-container'>
      <div className="logo-container m-auto">
        {!subscribed && <MailchimpForm onSubscribe={handleSubscribe} />}
      </div>
      </div>
      </>


    )
};
export default Events;