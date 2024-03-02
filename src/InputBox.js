import React, { useState } from 'react';
import './InputBox.css';
const InputBox = () => {
    // const [text, setPrint] = useState(false);
    const [text, setPrint] = useState('');

    const [data, setData] = useState('');
    const textChanger = (val) => {
        setData(val.target.value);
    }

    const printHandler = () => {
        setPrint(data);
    }
    return (
        <div className='input-value'>
            <h1>Get Input Value</h1>
            <div className='input-text'>
                {/* {
                    text? */}
                    <h3>{text}</h3>
                {/* //     :null
                // } */}
                <div className='input-feild'>
                    <input type='text' value={data} onChange={textChanger} placeholder='Enter Text'></input>
                    <button className='print' onClick={printHandler}>Print</button>
                </div>
            </div>
        </div>
    )
}

export default InputBox;