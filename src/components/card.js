import React from 'react'
import './card.css'

const Card = ({setData}) => {
  return (
    <>
    {setData.map((currElement)=>{
      return (
       <> 
        <div className="card-container" key={currElement.id}>
        <span className='stduent-no'> {currElement.id} </span>
        <span className="profile">
            <img src={currElement.profile} alt="" />
        </span>
        <span className="name">
            {currElement.name}
        </span>
        <span className="bio">
        {currElement.bio}
        </span>
        <span className="contact-info">
            {currElement.contact}
        </span>

      </div>
      </>
      )
    })}
      
    </>
  )
}
export default Card
