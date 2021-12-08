import React from 'react'
import TipInput from '../TipInput';
import styles from './_InputWrapper.module.scss';

const InputWrapper = ({ bill, people, handleBillChange, handlePeopleChange }) => {
    return (
        <div className={styles.wrapper}>
            <TipInput value={bill} icon="dollar" label="Bill Amount" handleChange={handleBillChange} />
            <TipInput value={people} icon="people" label="Number of People" handleChange={handlePeopleChange} />
        </div>
    )
}

export default InputWrapper
