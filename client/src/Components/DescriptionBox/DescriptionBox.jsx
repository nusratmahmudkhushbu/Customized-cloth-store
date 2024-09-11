import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate to buying and 
                selling of products or services over the internet and give serves as a vertual marketplace where business and individual
                showcase their products, interact with customers, and conducy transactions without the need for a physical presence.
                E-commerce websites have gained immense popularity due to their convenice accessibility, and the global reach they offer.
            </p>
            <p>E-commerce websites typically display products or services a detailed descriptions, images, prices, and
                available variety (e.g, sizes, colors).Each product usually jas its own dedication with 
                relavant information </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
