import React from 'react'
import styles from './SpecialsCard.css'
import plateImgSrc from '../../assets/greek-salad.jpg'
import DeliveryIcon from '../../assets/Delivery.svg'
const SpecialsCard = () => {
    return (
        <div style={styles}>
            <div class="card">
                <img src={plateImgSrc} alt="Example Image" />
                <div className="card-body">
                    <div className='card-upper'>
                        <h5 className="card-title">Greek Salad</h5>
                        <p className='card-price'>$ 12.99</p>
                    </div>
                    <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. .</p>
                    <div ><a href='/' className='card-link' >Order Delivery <image src={DeliveryIcon} /></a></div>
                </div>
            </div>
        </div>
    )
}

export default SpecialsCard