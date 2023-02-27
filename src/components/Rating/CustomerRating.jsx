import React from 'react'
import styles from './Rating.css'
import avatar from '../../assets/avatar.png'
import star from '../../assets/star.png'
const CustomerRating = ({ name, rating, review, imgSrc }) => {
    const ratingStars = Array.from({ length: rating }, (_, i) => (
        <img key={i} src={star} alt={`Image ${i + 1}`} className='rating-star' />
    ));
    return (
        <div style={styles}>
            <div className="rating-card">

                <div className="rating-card-body">
                    {ratingStars}
                    <div className='rating-card-upper'>

                    </div>
                    <div className='rating-card-avatar'>
                        <img src={imgSrc} alt="Example Image" />
                        <p className='rating-name'>{name}</p>
                    </div>
                    <div>
                        <p className="rating-card-text">{review}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerRating