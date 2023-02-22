import React from 'react'
import styles from './Rating.css'
import avatar from '../../assets/avatar.png'
import star from '../../assets/star.png'
const CustomerRating = () => {
    return (
        <div style={styles}>
            <div class="rating-card">

                <div className="rating-card-body">
                    <div className='rating-card-upper'>
                        <img src={star} alt={'deliver'} />
                    </div>
                    <div className='rating-card-avatar'>
                        <img src={avatar} alt="Example Image" />
                        <p className='rating-name'>John Doe</p>
                    </div>
                    <p className="rating-card-text">Great Service</p>

                </div>
            </div>
        </div>
    )
}

export default CustomerRating