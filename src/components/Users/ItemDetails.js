import React from 'react';

const ItemDetails = ({item, showDetails}) => {
 const {name, email, phone,username, address,website, yearlySalary, company} = item;
  return (
    <div className="details-item">
      <h2 className="text-center py-2 text-white">Friends Details</h2>
      <ul className="list-group mb-2">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Name
          <span className="badge badge-primary badge-pill">{name}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          username
          <span className="badge badge-primary badge-pill">@{username}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Email
          <span className="badge badge-primary badge-pill">{email}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Phone
  <span className="badge badge-primary badge-pill">{phone}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          City
          <span className="badge badge-primary badge-pill">{address.city}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Street
          <span className="badge badge-primary badge-pill">{address.street}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Zipcode
          <span className="badge badge-primary badge-pill">{address.zipcode}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        Website
          <span className="badge badge-primary badge-pill">{website}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
        YearlySalary
          <span className="badge badge-primary badge-pill">{yearlySalary}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Company
  <span className="badge badge-primary badge-pill">{company.name}</span>
        </li>
      </ul>
      <div className="btn btn-success pt-2" onClick={()=>showDetails(item)}>Ok</div>
    </div>
  );
};

export default ItemDetails;

