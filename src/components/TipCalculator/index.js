import React, { useState, useEffect } from 'react'
import Button from '../Button';
import InputWrapper from '../InputWrapper';
import PercentageWrapper from '../PercentageWrapper';
import PriceDisplay from '../PriceDisplay';
import styles from './_TipCalculator.module.scss';

const TipCalculator = () => {
    const [tipAmount, changeTipAmount] = useState(0);
    const [totalPerPerson, changeTotalPerPerson] = useState(0);
    const [billAmount, changeBillAmount] = useState("0.00");
    const [noOfPeople, changeNoOfPeople] = useState("1");
    const [checkedTip, changeCheckedTip] = useState(2);

    const percentageValues = [5, 10, 15, 20];

    const calculateResults = () => {
        let percentage = percentageValues[checkedTip] / 100;
        let parsedValue = (billAmount === "") ? 0 : parseFloat(billAmount);
        let parsedresult = (noOfPeople === "") ? 1 : parseInt(noOfPeople);

        let value = parsedValue * percentage;
        let result = value / parsedresult;

        changeTipAmount(formatPrice(value));
        changeTotalPerPerson(result);
    }

    const formatPrice = (price) => {
        return Number(price).toFixed(2);
    }

    const handleCheckedTip = (index) => {
        changeCheckedTip(index);
    }

    const handleBillAmountChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value) || value === "") changeBillAmount(value);
    }

    const handleNoOfPeopleChange = (e) => {
        const value = e.target.value;
        if (value === "") changeNoOfPeople(value);
        else if (!isNaN(value) && value > 0) changeNoOfPeople(parseInt(value));
    }

    return (
        <div className={styles.wrapper}>
            <PriceDisplay price={formatPrice(tipAmount)} title="Tip amount" />
            <PriceDisplay price={formatPrice(totalPerPerson)} title="Total per person" />
            <InputWrapper bill={billAmount} people={noOfPeople} handleBillChange={handleBillAmountChange} handlePeopleChange={handleNoOfPeopleChange} />
            <PercentageWrapper percentageValues={percentageValues} chosen={checkedTip} handleChange={handleCheckedTip} />
            <Button handleClick={calculateResults} value="Calculate" />
        </div>
    )
}

export default TipCalculator
