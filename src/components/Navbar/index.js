import { useState } from 'react'
import './index.css'
import stdData from '../studentAPI'
import Card from '../card'


const Navbar = () => {
    const [Info, setInfo] = useState(stdData);
    const filter=(category)=>{
        const updatedList = stdData.filter((currElement)=>{
            return currElement.category === category;
        })
        setInfo(updatedList);
    }
    return (
        <>
        <div className='container'>
            <ul class="navbar">
                <li><a href="#" onClick={()=> setInfo(stdData)}>Home</a></li>
                <li><a href="#" onClick={()=>filter("Studious")}>Studious</a></li>
                <li><a href="#" onClick={()=>filter("GymRat")}>GymRat</a></li>
                <li><a href="#" onClick={()=>filter("Gangster")}>Gangster</a></li>
                <li><a href="#" onClick={()=>filter("Notorious")}>Notorious</a></li>
                
            </ul>
            </div>
            <Card setData={Info}/>
        </>
    )
}

export default Navbar;
