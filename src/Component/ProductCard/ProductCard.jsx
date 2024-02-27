import React from 'react'
import './ProductCard.css'
export default function Card() {
    return (
        <div className='card-container'>
            <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
            <br />

            <div className="card-label">
                <span>20% Off</span>
                <span>Limited time</span>
            </div>
            <span className='prod-name'>Webbuilder 1</span>
            <p>Computer Modern Classic with wix support</p>
            
            <div className="price-container">
                <span className='product-price'>$39.96</span>
                <span className='original-price'>$49.96</span>
                <span className='discount-off'>(20% Off)</span>
            </div>

            <br />
            <button className="view-btn">
                View
            </button>
        </div>
    )
}
