import React from 'react'
import Hero from '../Hero/Hero'
import CustomerRating from '../Rating/CustomerRating'
import ButtonPrimary from '../Button/ButtonPrimary'
import Specials from '../Specials/Specials'
import styles from './Main.css'
import CustomerSays from '../CustomerSays/CustomerSays'
const Main = () => {
    return (
        <main style={styles}>
            <div className='Main-section'>
                <Hero />
                <Specials />
                <CustomerSays />
                <div className='info-section'>
                </div>
            </div>

        </main>
    )
}

export default Main