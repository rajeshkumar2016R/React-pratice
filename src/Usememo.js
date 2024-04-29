import React,{useState,useMemo} from "react";

const Usememo = () => {
    const [data, setData] = useState(0);
    const [count, setcount] = useState(10);
    const multiCount = useMemo(function multiCount(){
        console.log('funtion called')
        return data*3;
    },[data])
    return(
        <div>
            <h1>Use Memo</h1>
            <h2>Data : {data}</h2>
            <h2>count : {count}</h2>
            <h2>{multiCount}</h2>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setcount(count*10)}>Update Count</button>
        </div>
    )
}

export default Usememo;