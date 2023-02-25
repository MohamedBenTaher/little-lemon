import React from 'react'
import styles from './Customer.css'
import CustomerRating from '../Rating/CustomerRating'
import img1Src from '../../assets/img1.jpg'
import img2Src from '../../assets/img2.jpg'
import img3Src from '../../assets/img3.jpg'
import img4Src from '../../assets/avatar.png'
const CustomerSays = () => {
    return (
        <div style={styles}>
            <div className='testimonals-section'>
                <div className='testimonals-section-upper'>
                    <h3>Testimonials</h3>
                </div>
                <div className='testimonals-card-section'>
                    <CustomerRating name={'John Doe'} rating={4} review={'great experience'} imgSrc={img2Src} />
                    <CustomerRating name={'Sophie Jhonson '} rating={5} review={'fantastic dishes'} imgSrc={img1Src} />
                    <CustomerRating name={'Leila Gomez'} rating={5} review={'Wonderful Resutaurant'} imgSrc={img3Src} />
                    <CustomerRating name={'Sean Murfy'} rating={5} review={'Great Ambiance and great people'} imgSrc={img4Src} />
                </div>
            </div>
        </div>
    )
}

export default CustomerSays