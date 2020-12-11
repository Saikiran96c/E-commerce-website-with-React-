import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/rating';
import data from '../data';


export default function ProductScreen(props) {
  const Product = data.products.find((x) => x._id === props.match.params.id);
  if(!Product){
   return
            };
  return (
    <div>
      <Link to ="/"> Back to page</Link>
      <div className="row.top">

        <div className="col-2">
                 <img className="large" src={Product.image} alt={Product.name}   ></img>  
                    </div>
        <div className="col-1">
          <ul>
            <li>
  <h1>{Product.name}</h1>
            </li>
            <li>
              <Rating
                rating={Product.rating}
                numReviews={Product.reviews}
              ></Rating>
            </li>
            <li>
              Price: {Product.price}
            </li>
            <li>
              Description:{Product.description}
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className= "card card-body">
            <ul>
              <li>
              <div className="row">
                <div>
                  Price
                </div>
  <div className="price"> ${Product.price}</div>
  </div> </li>
  <li>
                <div className="row">
                <div>
                  Status
                </div>
  <div>
    {Product.countInStock>0?( <span className="success">In Stock</span>): (<span className="danger">Unavailable</span>)}
  </div>
             </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
         
    </div>
  );
}