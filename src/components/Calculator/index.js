import React, { useState } from 'react';
import './style.css';

function Calculator() {
    const [input, setInput] = useState('')

    const handleNumberClick = (number) => {
        setInput(input + number)
    }

    const handleClear = () => {
        setInput('')
    }

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    }

    const handleOperator = operator => {
        if (input !== '') {
            setInput(input + operator)
        }
    }

    const handleEqual = () => {
        //eslint-disable-next-line
        setInput(eval(input).toString())
    }



    return (
        <div className='calculator'>
            <div className='calculator-inner'>
                <div className='calc-display'>{input !== '' ? input : '0'}</div>
                <div className='button-row'>
                    <button onClick={handleClear} className="calc-button">C</button>
                    <button onClick={handleBackspace} className="calc-button">⌫</button>
                    <button onClick={() => handleOperator('/')} className="calc-button">÷</button>
                </div>
                <div className='button-row'>
                    <button onClick={() => handleNumberClick('7')} className='calc-button'>7</button>
                    <button onClick={() => handleNumberClick('8')} className='calc-button'>8</button>
                    <button onClick={() => handleNumberClick('9')} className='calc-button'>9</button>
                    <button onClick={() => handleOperator('*')} className='calc-button'>*</button>
                </div>
                <div className='button-row'>
                    <button onClick={() => handleNumberClick('4')} className='calc-button'>4</button>
                    <button onClick={() => handleNumberClick('5')} className='calc-button'>5</button>
                    <button onClick={() => handleNumberClick('6')} className='calc-button'>6</button>
                    <button onClick={() => handleOperator('-')} className='calc-button'>-</button>
                </div>
                <div className='button-row'>
                    <button onClick={() => handleNumberClick('3')} className='calc-button'>3</button>
                    <button onClick={() => handleNumberClick('2')} className='calc-button'>2</button>
                    <button onClick={() => handleNumberClick('1')} className='calc-button'>1</button>
                    <button onClick={() => handleOperator('+')} className='calc-button'>+</button>
                </div>
                <div className='button-row'>
                    <button onClick={() => handleNumberClick('0')} className='calc-button'>0</button>
                    <button onClick={() => handleNumberClick('.')} className='calc-button'>.</button>
                    <button onClick={() => handleEqual('=')} className='calc-button'> =</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;