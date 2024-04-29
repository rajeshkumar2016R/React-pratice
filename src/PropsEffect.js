
import React, {useEffect} from "react"
const PropsEffect = (props) => {
    
    useEffect(()=>{
        console.log('Both called')
    },[props.data])
    return(
        <div>
             <h4>Data: {props.data}</h4>
            <h4>Count: {props.count}</h4>

        </div>
    )
}

export default PropsEffect;