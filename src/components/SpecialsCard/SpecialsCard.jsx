import React from 'react'
import styles from './SpecialsCard.css'
import plateImgSrc from '../../assets/greek-salad.jpg'
import DeliveryIcon from '../../assets/Delivery.svg'
const SpecialsCard = ({ title, price, description, imgSrc }) => {
    return (
        <div style={styles}>
            <div className="card">
                <img src={imgSrc} alt="Example Image" />
                <div className="card-body">
                    <div className='card-upper'>
                        <h5 className="card-title">{title}</h5>
                        <p className='card-price'>$ {price}</p>
                    </div>
                    <p className="card-text">{description}</p>
                    <div className='delivery'>
                        <a href='/' className='card-link' >
                            Order Delivery
                            <div className='del-img'>
                                <img src={DeliveryIcon} className='img' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SpecialsCard