import React from 'react'
import styles from './chicago.css'
import imageSrc1 from '../../assets/chicago1.jpg'
import imageSrc2 from '../../assets/chicago2.jpg'
const Chicago = () => {
    return (
        <div styles={styles} >
            <div className='info-section'>
                <div className='info'>
                    <h1 style={{ color: '#000' }}>Little Lemon</h1>
                    <h3 >chicago</h3>
                    <p className='info-text'>
                        Welcome to Little Lemon, the perfect place to satisfy your cravings for delicious and authentic cuisine.
                        Our restaurant is known for serving up some of the best Asian fusion dishes in town,
                        all made with the freshest and highest quality ingredients.
                    </p>
                </div>
                <div className='img-container'>
                    <img src={imageSrc1} alt='food' className='info-image1' />
                    <img src={imageSrc2} alt='food' className='info-image2' />
                </div>
            </div>
        </div>
    )
}

export default Chicago