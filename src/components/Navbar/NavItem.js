import React from 'react'

const NavItem = ({filter, NavList}) => {
    
  return (
    <>
    <div className='container'>
            <ul class="navbar">
            {NavList.map((currElement)=>{
            return(
                <li><a href=" #" onClick={()=>filter(currElement)} key={currElement._id}>{currElement}</a></li>
            )
            })}    
            </ul>
            </div>
    </>
  )
}

export default NavItem
