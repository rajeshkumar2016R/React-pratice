
import React,{useState} from "react";
import './FormValidation.css';

const FormValidation = () => {

    const [name, setName] = useState('');
    const [interest, setInterest] = useState(false);
    const [item, setItem] = useState('');
    const getFormData = (e) => {
        console.log(name,interest,item);
        e.preventDefault();
    }
    return (
        <div className="formInput">
            
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <select value={interest} onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select Option</option>
                    <option>JavaScript</option>
                    <option>Java</option>
                </select>
                <div className="checkedbox">
                    <input type="checkbox" value={item} onChange={(e)=>setItem(e.target.checked)}></input>
                    <label>Term & Condition</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;