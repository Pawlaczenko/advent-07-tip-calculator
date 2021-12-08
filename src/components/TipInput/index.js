import React from 'react'
import styles from './_TipInput.module.scss';

const TipInput = ({ label, icon, value, handleChange }) => {
    return (
        <div className={`${styles.wrapper}`} >
            <input value={value} onChange={handleChange} className={`${styles.input} ${styles[icon]}`} type="text" />
            <label className={styles.label}>{label}</label>
        </div>
    )
}

export default TipInput
