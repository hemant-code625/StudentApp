import { useReducer } from "react";
import "./useState.css"
const RecuderHook =()=>{
    const reducer=(state, action)=>{
        if(action.type === "INRC"){
            return state = state + 1;
        }
        else if(action.type === "DERC"){
            if(state <=0){
                return state =0;
            }
            return state = state - 1;
        }
    }
    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData);
    return(
        <>
        <div className="main">
        <p className="value"> <h6>This is using useReducer Hook! </h6> </p>
        <p className="value">Count: {state}</p>
        <div className="container">
        {/* With the help of dispatch we are calling reducer function    */}
        <button className="btn" onClick={()=>dispatch({type: "INRC"})}> Increment </button>               
        <button className="btn" onClick={()=>dispatch({type: "DERC"})}> Decrement </button>
        </div>
        </div>
        </>
    )
}

export default RecuderHook;