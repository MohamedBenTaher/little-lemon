import React from 'react'
import styles from './Button.css'
const ButtonPrimary = ({ content }) => {
    return (
        <div style={styles}>
            <button className='primary-button' onClick={() => console.log('clicked')}>{content}</button>
        </div>
    )
}

export default ButtonPrimary