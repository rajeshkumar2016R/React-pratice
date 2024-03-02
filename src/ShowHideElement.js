import React, { useState } from 'react';
import './ShowHideElement.css'
const ShowHideElement = () => {
    const [status, setStatus] = useState(true);
    return (
        <div className="Hide-show">
            {
                status ?
                    <h2>Hide And Show</h2>
                    : null
            }
            <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>
        </div>
    )
}

export default ShowHideElement;