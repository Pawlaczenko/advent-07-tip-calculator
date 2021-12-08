import React from 'react'
import PercentageItem from '../PercentageItem';
import styles from './_PercentageWrapper.module.scss';

const PercentageWrapper = ({ chosen, handleChange, percentageValues }) => {
    return (
        <ul className={styles.wrapper}>
            {
                percentageValues.map((el, index) => {
                    return <PercentageItem key={index} value={el} isChecked={chosen === index} handleChange={handleChange} index={index} />
                })
            }
        </ul>
    )
}

export default PercentageWrapper
