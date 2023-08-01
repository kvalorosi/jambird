
import '../views/css/about.css'
import Card from 'react-bootstrap/Card';


const About = () => {
  return (
    
    <>
    <div className="title-container text-center">
   <h1>About Jambird</h1>
   </div>
    <div className="content-container w-75 m-auto">
   <Card border="success" className="card-custom" style={{ backgroundColor: "#e6f7ff"}}>
      <Card.Body>

This offering is all about cycling- everything is individually wrapped so you can easily throw it in a jersey pocket or pack.

All baked goods are made in a home kitchen and protected under the Colorado Cottage Act.  

Portable, packable, perfect pocket snacks. All vegetarian. Some sweet. Some savory.

After serving as a soigneiur on multiple occasions, I received incredible feedback from riders- Jambird is my answer to real food for real cyclists. Energy bars and liquid fuel are readily available but cafe’s and coffee shops can be less common along ride routes. Cyclists crave real food, freshly made, with high quality ingredients. Jambird offers riders packable, home baked goods to take on a ride, near or far. Jambird offers customizable offerings with high quality ingredients. Every order is individually wrapped and ready to go for a ride. Throw a batch of banana bread in the freezer or share a batch of cookie bars with your cycling crew. 

I love to bake. I love to bike. Jambird marries the two together into a sharable offering that makes it as simple as pie to bring fresh baked goods on a bike ride. 
-Briana
</Card.Body>
    </Card>
</div>

<div className="container">
<Card>
  <Card.Img variant="bottom" src="images/IMG_7280.jpeg" />
</Card>

</div>

</>


  

  )
};

export default About;