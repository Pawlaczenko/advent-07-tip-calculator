import React from 'react'
import styles from './_PercentageItem.module.scss';

const PercentageItem = ({ value, isChecked, handleChange, index }) => {
    const sendCheckedValue = () => {
        handleChange(index);
    }
    return (
        <li className={styles.wrapper}>
            <input className={styles.input} type="radio" name="percentage" value={index} checked={isChecked} />
            <label onClick={sendCheckedValue} className={styles.label}>{value}%</label>
        </li>
    )
}

export default PercentageItem
