import React from 'react'
import styles from './_Button.module.scss';

const Button = ({ value, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick}>{value}</button>
    )
}

export default Button
