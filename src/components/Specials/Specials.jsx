import React from 'react'
import SpecialsCard from '../SpecialsCard/SpecialsCard'
import styles from './Specials.css'
import ButtonPrimary from '../Button/ButtonPrimary'
import desertSrc from '../../assets/lemon-dessert.jpg'
import plateImgSrc from '../../assets/greek-salad.jpg'
import foodSrc from '../../assets/restauranfood.jpg'
const Specials = () => {
    return (
        <div style={styles}>
            <div className='specials-section'>
                <div className='special-section-upper'>
                    <h2>This Week's Specials!</h2>
                    <ButtonPrimary content={'Online Menu'} />
                </div>
                <div className='card-section'>
                    <SpecialsCard title={'Greek Salad'} description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'} price={'12.99'} imgSrc={plateImgSrc} />
                    <SpecialsCard title={'Bruchetta'} description={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '} price={'5.99'} imgSrc={desertSrc} />
                    <SpecialsCard title={'Lemon Dessert'} description={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'} price={'5.00'} imgSrc={foodSrc} />
                </div>
            </div>
        </div>
    )
}

export default Specials