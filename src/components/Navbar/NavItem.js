import React from 'react'

const NavItem = ({filter, NavList}) => {
    
  return (
    <>
    <div className='container'>
            <ul class="navbar">
            {NavList.map((currElement)=>{
            return(
                <li><a href="#" onClick={()=>filter(currElement)}>{currElement}</a></li>
            )
            })}    
            </ul>
            </div>
    </>
  )
}

export default NavItem
