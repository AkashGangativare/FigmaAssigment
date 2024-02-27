import React from 'react';
import './Product.css'
import productsData from '../../Data/Data.json';

const Product = () => {
    return (
        <div className='product-container'>

            <div className="product-badge">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.88981 1.77204C4.00126 1.57794 4.208 1.45825 4.43182 1.45825H15.5683C15.792 1.45825 15.9987 1.57794 16.1102 1.77204L19.292 7.31371C19.4234 7.54239 19.397 7.82886 19.2261 8.02975L10.4762 18.3214C10.3574 18.4611 10.1833 18.5416 10 18.5416C9.81668 18.5416 9.64259 18.4611 9.52384 18.3214L0.773841 8.02975C0.603042 7.82886 0.576697 7.54239 0.707994 7.31371L3.88981 1.77204ZM4.79366 2.70825L2.01087 7.55494L10 16.9516L17.9891 7.55494L15.2064 2.70825H4.79366Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22447 1.49382C4.55009 1.37931 4.90691 1.55044 5.02142 1.87607L9.99999 16.0329L14.9786 1.87607C15.0931 1.55044 15.4499 1.37931 15.7755 1.49382C16.1011 1.60833 16.2723 1.96514 16.1578 2.29077L10.5896 18.1241C10.5016 18.3744 10.2652 18.5417 9.99999 18.5417C9.73474 18.5417 9.49839 18.3744 9.41039 18.1241L3.84221 2.29077C3.72769 1.96514 3.89883 1.60833 4.22447 1.49382Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625 7.625C0.625 7.27981 0.904822 7 1.25 7H18.75C19.0951 7 19.375 7.27981 19.375 7.625C19.375 7.97018 19.0951 8.25 18.75 8.25H1.25C0.904822 8.25 0.625 7.97018 0.625 7.625Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.45825C10.2122 1.45825 10.4099 1.5659 10.525 1.74413L14.1046 7.2858C14.2919 7.57575 14.2086 7.96263 13.9187 8.14991C13.6287 8.3372 13.2419 8.25398 13.0546 7.96403L10 3.23514L6.94548 7.96403C6.7582 8.25398 6.37132 8.3372 6.08137 8.14991C5.79142 7.96263 5.7082 7.57575 5.89548 7.2858L9.47503 1.74413C9.59016 1.5659 9.78785 1.45825 10 1.45825Z" fill="white" />
                </svg>

                <p>Best Choice</p>

            </div>

            <div className="product-number">
                1
            </div>

            <div className="product-img">
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
                <p className="img-title">Builder 1</p>
            </div>

            <div className="product-info">
                <h4>WixPro 72-Inch Responsive Website Builder</h4>
                <p>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>

                <h4>Main highlights</h4>
                <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

                <a href="#">Show more<img width="20" height="18" className='down-arrow-img' src="https://img.icons8.com/material-rounded/24/000000/expand-arrow--v1.png" alt="expand-arrow--v1" /> </a>

            </div>

            <div className="product-rating">
                <div className="rating-box">

                    <p className="rating-value">
                        9.8
                        <img width="8" height="8" src="https://img.icons8.com/android/8/000000/info.png" alt="info" />
                    </p>
                    <p className="rating-name">Exceptional</p>
                    <div className="star-rating">
                        <img width="11" height="11" src="https://img.icons8.com/ios-glyphs/11/FAB005/star--v1.png" alt="star--v1" />
                        <img width="11" height="11" src="https://img.icons8.com/ios-glyphs/11/FAB005/star--v1.png" alt="star--v1" />
                        <img width="11" height="11" src="https://img.icons8.com/ios-glyphs/11/FAB005/star--v1.png" alt="star--v1" />
                        <img width="11" height="11" src="https://img.icons8.com/ios-glyphs/11/FAB005/star--v1.png" alt="star--v1" />
                        <img width="11" height="11" src="https://img.icons8.com/ios-glyphs/11/FAB005/star--v1.png" alt="star--v1" />
                    </div>


                </div>

                <button className="view-btn">
                    View
                </button>
            </div>
        </div>
    )
}

export default Product