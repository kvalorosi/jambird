import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import '../views/css/cart.css'


const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
 

  const clearCart = () => {
    setCart({size:0, total:0, products:{}});
  }


  const addProduct = (id) => {
    let copyCart = { ...cart };
    copyCart.size ++;
    copyCart.total += parseFloat(copyCart.products[id].data.price);
    copyCart.products[id].quantity ++;
    setCart(copyCart);
  };

  const decreaseProduct = (id) => {
    let copyCart = { ...cart };
    copyCart.size --;
    copyCart.total -= parseFloat(copyCart.products[id].data.price);
    copyCart.products[id].quantity > 1 ? 
    copyCart.products[id].quantity -- :
    delete copyCart.products[id];

    setCart(copyCart);
  };

  const removeProduct = (id) => {
    let copyCart = { ...cart };
    copyCart.size -= copyCart.products[id].quantity;
    copyCart.total -= copyCart.products[id].quantity * copyCart.products[id].data.price;
    delete copyCart.products[id];
    setCart(copyCart);
  };

  return (
    <>
      <div className="Container">
        <h2>Heres your order! One step closer to hitting the trail! <span><i id="bike" className="fa-solid fa-bicycle" /></span></h2>
        
        <hr />
        {Object.values(cart.products).map((pro, ind) => {
          return (
            <Card key={ind} className="text-center" style={{ width: '15rem' }}>
              <Card.Header><strong>{pro.data.food_name}</strong></Card.Header>
              <Card.Body>
                <div>
                  <Card.Img className="item-img" variant="top" src={pro.data.prod_image} />
                </div>
                <hr />
                
                  <p>${pro.data.price}0</p>
                  <hr />
                  <Button variant="info" onClick={() => decreaseProduct(pro.data.id)}> -1 </Button>
                  <p>Item Total: {pro.quantity}</p>
                  <Button variant="info" onClick={() => addProduct(pro.data.id)}> +1 </Button>
                  <Card.Text>
                </Card.Text>
                <Button variant="warning" onClick={() => removeProduct(pro.data.id)}>Remove from cart</Button>
                <hr />
              </Card.Body>
            </Card>
          );
        })}
      </div>
     <div className="box">
            <Link className="btn btn-info" onClick={clearCart}>Empty Cart</Link>
             </div>
      
        
    
    
    </>
  );
}

export default Cart;

