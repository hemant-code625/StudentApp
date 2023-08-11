import { useState } from 'react'
import './index.css'
import stdData from '../studentAPI'
import Card from '../card'
import NavItem from './NavItem'

const uniqueList = ["Home",
    ...new Set(
        stdData.map((currElement)=>{
    return currElement.category;
    }))];


// console.log(uniqueList)


const Navbar = () => {
    
    const [Info, setInfo] = useState(stdData);
    const [NavList, setNavList] = useState(uniqueList);

    const filter=(category)=>{
        if(category === "Home"){
            setInfo(stdData);
            return;
        }
        const updatedList = stdData.filter((currElement)=>{
            return currElement.category === category;
        })
        setInfo(updatedList);
    }
    return (
        <>
            <NavItem filter = {filter} NavList = {NavList} />
            <Card setData={Info}/>
        </>
    )
}

export default Navbar;
