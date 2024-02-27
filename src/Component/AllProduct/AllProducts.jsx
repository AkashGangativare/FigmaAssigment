import React from 'react'
import './AllProducts.css'
import Product from '../Product/Product';


const AllProducts = () => {
  return (
    <div className='all-products-container'>
        <Product/>
        <Product/>
    </div>
  )
}

export default AllProducts