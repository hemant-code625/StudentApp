import { useEffect, useState } from "react";

const UseEffectHook =()=>{
    const [Val, setVal] = useState(0);
    useEffect(()=>{
        return(
            <>
                {document.title = `Count(${Val})`}    
            </>
        )
    })                   // if we don't put an empty array dependency as a second parameter then on every change in component this will run the code. If we put the empty array then it will only run once when the website loads.

    return(
        <>
        <p> Count: {Val}</p>
        <div className="container">
            <button onClick={()=> setVal(Val + 1)}> Increment </button>
        </div>
        </>
    )
}
export default UseEffectHook;