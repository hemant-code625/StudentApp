import React from "react";
import "./card.css";

const Card = ({ setData }) => {
  return (
    <>
      {setData.map((currElement) => {
        const { id, profile, bio, name, contact } = currElement;
        return (
          <>
            <div className="card-container" key={id}>
              <span className="stduent-no"> {id} </span>
              <span className="profile">
                <img src={profile} alt="" />
              </span>
              <span className="name">{name}</span>
              <span className="bio">{bio}</span>
              <span className="contact-info">{contact}</span>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Card;
