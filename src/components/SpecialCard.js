import React from 'react';
import { useNavigate } from 'react-router-dom';

const SpecialCard = ({title, price, image, description}) => {
    const navigate = useNavigate();

    return(
        <div className = "special-card">
            <img src={image} alt={title} className='special-card-image'/>
            <div className='special-info'>
                <div className='special-header'>
                    <h3>{title}</h3>
                    <p className='price'>${price}</p>
                </div>

                <p>{description}</p>
                <button className ="order-btn" onClick={() => navigate('/order')}>Order a delivery 🚚</button>

            </div>
        </div>
    )
}

export default SpecialCard;