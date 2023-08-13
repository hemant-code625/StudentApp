import React,{useState} from "react";
import './useState.css'
const Function=()=>{
    
    const Increment=()=>{
        return setCount(Count+1);
    }
    const Decrement =()=>{
        if(Count <= 0 ){
            setCount(0);
        }
        else{ 
            setCount(Count -1);
        }
    }
    const [Count, setCount] = useState(0);
    return(
        <>
        <div className="main">
        <p className="value">This is using useState Hook!</p>
        <p className="value">Count: {Count}</p>
        {/* <button onClick={setCount = setCount +1}>Increment</button>  */}
        <div className="container">
        <button className="btn" onClick={()=>Increment()}> Increment </button> 
        <button className="btn" onClick={()=>{Decrement()}}> Decrement </button>
        </div>
        </div>
        </>
    )
}

export default Function;