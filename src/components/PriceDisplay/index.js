import React from 'react'
import styles from './_PriceDisplay.module.scss';

const PriceDisplay = ({ title, price }) => {
    return (
        <div className={styles.priceDisplay}>
            <span className={styles.title}>{title}</span>
            <div className={styles.price}>
                <sup>$</sup>{price}
            </div>
        </div>
    )
}

export default PriceDisplay
