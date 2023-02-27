import React from 'react'
import imageSrc from '../../assets/restauranfood.jpg';
import ButtonPrimary from '../Button/ButtonPrimary';
import styles from './hero.css'
const Hero = () => {
    return (
        <div styles={styles} >
            <div className='header-section'>
                <div>
                    <h1>Little Lemon</h1>
                    <h3 style={{ color: '#FFF' }}>chicago</h3>
                    <p className='hero-text'>
                        Welcome to Little Lemon, the perfect place to satisfy your cravings for delicious and authentic cuisine.
                        Our restaurant is known for serving up some of the best Asian fusion dishes in town,
                        all made with the freshest and highest quality ingredients.
                    </p>
                    <div className='btn'>
                        <ButtonPrimary content={'Reserve a Table'} />
                    </div>
                </div>
                <div>
                    <img src={imageSrc} alt='food' className='hero-image' />
                </div>
            </div>
        </div>
    )
}

export default Hero