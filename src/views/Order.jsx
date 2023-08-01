import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import '../views/css/home.css';





const Order = () => {
  useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });

  const getProductData = async () => {
    let response = await axios.get('http://127.0.0.1:5000/auth/products');
    return response.status === 200 ? response.data : null

  }

  const loadProductData = async () => {
    let data = await getProductData();
    setProducts(data.products);

  }

  const [products, setProducts] = useState(() => loadProductData())

  return (
    <>
      <div className="prod_container">
        <div className="row">
          {products && products.length ? products.map((p, index) => {
            return <Card key={index} id={p.id} style={{ width: '18rem' }}>
              <Card.Title>{p.food_name}</Card.Title>
              <Card.Body>
                <Card.Img variant="top" src={p.prod_image} />
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Contains: {p.allergens}</ListGroup.Item>
                  <span><i id="wheat" className="fa-solid fa-wheat-awn-circle-exclamation" /></span>
                  <span><i id="dairycow" className="fa-solid fa-cow" /></span>
                  <hr />
                  <ListGroup.Item>{p.size}</ListGroup.Item>
                  <ListGroup.Item>Price: ${p.price}0</ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Order</Button>
              </Card.Body>
            </Card>
          })
        


            :
            <div className="load">
        
          <h1>Loading Please be Patient...<Spinner animation="border" variant="primary"/></h1>
        
        </div>
}
        </div>

      </div>


    </>

  )
};

export default Order;



