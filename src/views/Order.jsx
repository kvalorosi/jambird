import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import '../views/css/home.css';
import { DataContext } from "../context/DataProvider";
import { useDatabase, useUser } from "reactfire";


const Order = () => {
  useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });


  const database = useDatabase();
  const { data:user } = useUser();

  const getProductData = async () => {
    let response = await axios.get('http://127.0.0.1:5000/auth/products');
    return response.status === 200 ? response.data : null

  }

  const loadProductData = async () => {
    let data = await getProductData();
    setProducts(data.products);

  }

  const [products, setProducts] = useState(() => loadProductData());

  const { cart, setCart } = useContext(DataContext);

  const addProduct = (products) => {
    let newCart = { ...cart };
    newCart.size++;
    newCart.total += parseInt(products.price);
    newCart.products[products.id] ?
      newCart.products[products.id].quantity++
      :
      newCart.products[products.id] = { data: products, quatity: 1 };
    
      set(ref(db, 'carts/' + user.uid), copyCart);

    setCart(newCart);

  }

  useEffect(() => {
    loadProductData();
  }, []);


  return (
    <>
    
    <br />
    <br />
    {/* <Card className="top" style={{ backgroundColor: '#6ac1ea', padding: '20px 20px 20px 20px' }}>
      <Card.Text>All baked goods are made in a home kitchen and protected under the Colorado Cottage Act.Portable, packable, perfect pocket snacks. All vegetarian. Some sweet. Some savory.</Card.Text>
      </Card> */}
      <div className="prod_container" style={{ padding: '40px 40px 20px 40px' }}>
        <Row>
         {products && products.length ? products.map((p, index) => {
            return <Card border="success" key={index} id={p.id} style={{ width: '12rem', backgroundColor: "#e6f7ff" }}>
              <br />
              <Card.Title>{p.food_name}</Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={p.prod_image} />
                <ListGroup className="list-group-flush">
                  <br />
                  <br />
                  <ListGroup.Item>Contains: {p.allergens}</ListGroup.Item>
                  {p.allergens.includes('dairy') && <i className="fas fa-wheat-awn-circle-exclamation" />}
                  {p.allergens.includes('gluten') && <i className="fas fa-cow" />}

                  <span><i id="wheat" className="fa-solid fa-wheat-awn-circle-exclamation" /></span>
                  <span><i id="dairycow" className="fa-solid fa-cow" /></span>
                  <hr />
                  <ListGroup.Item>{p.size}</ListGroup.Item>
                  <ListGroup.Item>Price: ${p.price}0</ListGroup.Item>
                  <Button variant="primary" onClick={() => addProduct(p)}>Order</Button>
                </ListGroup>
                {/* <Button variant="primary" onClick={() => addProduct(p)}>Order</Button> */}
              </Card.Body>
            </Card>
          })
          :
            <div className="load">

              <h1>Loading Please be Patient...<Spinner animation="border" variant="primary" /></h1>

            </div>
          }
          </Row>
        </div>
        <Card border="none" className="note" style={{ backgroundColor: '#6ac1ea', padding: '20px 20px 20px 20px' }}>
<Card.Text>
  NOTE - All dairy products are organic; all eggs are organic/non-gmo; all produce is organic and/or local when available; all flour & sugar is non-gmo. JamBird strives to use only high quality ingredients which result in a high quality baked good!
</Card.Text>
</Card>



</>

  )
};

export default Order;



