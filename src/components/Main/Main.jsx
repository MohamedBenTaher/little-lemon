import React from 'react'
import Hero from '../Hero/Hero'
import CustomerRating from '../Rating/CustomerRating'
import ButtonPrimary from '../Button/ButtonPrimary'
import Specials from '../Specials/Specials'
import styles from './Main.css'
import CustomerSays from '../CustomerSays/CustomerSays'
import Chicago from '../Chicago/Chicago'
const Main = ({ navigate }) => {
    return (
        <main style={styles}>
            <div className='Main-section'>
                <Hero navigate={navigate} />
                <Specials />
                <CustomerSays />
                <Chicago />
            </div>

        </main>
    )
}

export default Main