import React from 'react'
import SpecialsCard from '../SpecialsCard/SpecialsCard'
import styles from './Specials.css'
import ButtonPrimary from '../Button/ButtonPrimary'
const Specials = () => {
    return (
        <div style={styles}>
            <div className='specials-section'>
                <div className='special-section-upper'>
                    <h2>This Week's Specials!</h2>
                    <ButtonPrimary content={'Online Menu'} />
                </div>
                <SpecialsCard />
            </div>
        </div>
    )
}

export default Specials