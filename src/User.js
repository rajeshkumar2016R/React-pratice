
import React, {useState} from "react";
import './User.css';
const User = () => {
    const [data, setData] = useState(0);
    function nameChange(){
        setData(data+1);
    }
    return(
        <div className="count">
            <h2>{data}</h2>
            <button onClick={nameChange}> Click Me!</button>
        </div>
    )
}

export default User;