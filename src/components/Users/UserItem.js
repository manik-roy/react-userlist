import React from 'react';
import ItemDetails from './ItemDetails';

const UserItem = ({user, addSalary, showDetails}) => {

  const {name, email, phone, img, isClick} = user;
  
  return (
    <div className="single-user d-block m-auto">
    <div className="card">
    <span className="addIcon" onClick={() => addSalary(user)} ><i className="fas fa-plus"></i></span>
    <div className="image-area">
      <div style={{backgroundImage:`url(${img})`}} className="card-img-top" />
    </div>
    <div className="card-body text-center">
      <h2 className="card-title">{name}</h2>
      <h6 className="card-subtitle text-muted "> <i className="far fa-envelope"></i>{email.toLowerCase()}</h6>
      <p className="text-muted pt-1"> <i className="fas fa-phone-alt"></i>{phone}</p>
      <p className="card-text p-3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button className="btn btn-success " onClick={() => showDetails(user)}>Details</button>
      <div className="socials-area pb-4">
        <ul>
          <li><a href="/#" className="facebook"> <i className="fab fa-facebook-f"></i> </a></li>
          <li><a href="/#" className="linkedin"> <i className="fab fa-linkedin-in"></i> </a></li>
          <li><a href="/#" className="twitter"> <i className="fab fa-twitter"></i> </a></li>
          <li><a href="/#" className="github"> <i className="fab fa-github"></i> </a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className={isClick ? 'user-details toggler':'user-details'}>
    <ItemDetails item={user} showDetails={showDetails} />
  </div>
</div>
  );
};

export default UserItem;