import React from 'react'
import styles from './Button.css'
import { useNavigate } from 'react-router-dom'
const ButtonPrimary = ({ content, home, submit, navigate, disabled }) => {

    return (
        <div style={styles}>
            <button type={submit ? 'submit' : null} className='primary-button' disabled={disabled} onClick={() => home ? navigate('/') : navigate('/booking')}
                style={{ width: submit ? '100%' : '200px' }}
            >{content}</button>
        </div>
    )
}

export default ButtonPrimary