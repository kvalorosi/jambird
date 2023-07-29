import { useEffect, useState } from "react";
import axios from "axios";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
    
        <div>
            <h1></h1>
        </div>
        <div className="container m-auto">
            <div className="row">
            {products && products.length ? products.map((p, index) => {
            return <Card key={index} id={p.id} sx={{ maxWidth: 345 }}>
                 <CardMedia
        sx={{ height: 140 }}
        image={p.prod_image}
        title={p.food_name}
      />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"> {p.food_name}</Typography>
              <Typography variant="body2" color="text.secondary">
               Contains: {p.allergens}
               <br />
               ${p.price}0 
               <br />
                {p.size}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
            })
            :
            <h1>Loading Please be Patient...</h1>
        }
          </div>
          </div>





          </>

    )
};

export default Order;



