import React from 'react';
import "./RelatedProducts.css"
import ProductCard from '../ProductCard/ProductCard.jsx'

const RelatedProducts = () => {
    return (
        <div className="related-products-container">
            <p>Related deals you might like for</p>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default RelatedProducts