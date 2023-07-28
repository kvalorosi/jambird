
import '../views/css/about.css'
import MailchimpForm from '../components/MailchimpForm';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const About = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };
  return (
    <>
    <div className="content-container w-75 m-auto">
   <Card className="card-custom" style={{ backgroundColor: "#e6f7ff"}}>
      <Card.Body>

JamBird is live! And ready to go for a ride. This offering is all about cycling- everything is individually wrapped so you can easily throw it in a jersey pocket or pack. Please enjoy this sample box & feel free to share! (Everything here will freeze well if you want to save anything for beyond the next couple days.)

All baked goods are made in a home kitchen and protected under the Colorado Cottage Act. Extensive sanitary practices are in place. 

For a full list of the current seasonal offerings and pricing, see the note attached. 

Note- All dairy products are organic; all eggs are organic/non-gmo; all produce is organic and/or local when available; all flour & sugar is non-gmo. JamBird strives to use only high quality ingredients which result in a high quality baked good!

Portable, packable, perfect pocket snacks

All vegetarian. Some sweet. Some savory.

After serving as a soigneiur on multiple occasions, I received incredible feedback from riders- Jambird is my answer to real food for real cyclists. Energy bars and liquid fuel are readily available but cafe’s and coffee shops can be less common along ride routes. Cyclists crave real food, freshly made, with high quality ingredients. Jambird offers riders packable, home baked goods to take on a ride, near or far. Jambird offers customizable offerings with high quality ingredients. Every order is individually wrapped and ready to go for a ride. Throw a batch of banana bread in the freezer or share a batch of cookie bars with your cycling crew. 

I love to bake. I love to bike. Jambird marries the two together into a sharable offering that makes it as simple as pie to bring fresh baked goods on a bike ride. 
Briana
</Card.Body>
    </Card>
    </div>
      <div className="content-container">
        {!subscribed && <MailchimpForm onSubscribe={handleSubscribe} />}
      </div>




    </>
  )
};

export default About;