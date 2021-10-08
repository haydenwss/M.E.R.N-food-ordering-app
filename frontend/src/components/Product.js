import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { motion } from 'framer-motion';

const Product = ({ product }) => {

 

  return (
    <motion.div 
    initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

    >
      <Card className='my-3 p-3 card-container'>
        <Link to={`/product/${product._id}`}>
          <Card.Img 
          className='card-image' src={product.image} variant='top' />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as='h3'>${product.price}</Card.Text>
          <Link to={`/product/${product._id}`}>
            <motion.div 
              className='product-arrow'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0 }}> 
                <i class="fas fa-plus-circle"></i>
            </motion.div>
          </Link>
          
        </Card.Body>
      </Card>
    </motion.div>
  )
}

export default Product
