 import React,{ useState} from "react";
 import PropsEffect from "./PropsEffect";
 import './Effect.css';
const Effect = () => {
    const [data,setData] = useState(10);
    const [count,setCount] = useState(20);
    return(
        <div>
            <h1>Use Effect</h1>
            <PropsEffect data={data} count={count}/>
            {/* <h4>Data: {data}</h4>
            <h4>Count: {count}</h4> */}
            
            <button className="hello" onClick={()=>setData(data+1)}>Data</button>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default Effect;