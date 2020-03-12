import React from 'react';

const UserItem = () => {
  return (
    <div className="single-user">
    <div className="card mb-3 shadow" >
      <div className="row no-gutters">
        <div className="col-md-4 p-2">
          <img src="https://images-na.ssl-images-amazon.com/images/I/615e7%2BZdLqL._SL1050_.jpg" className="card-img" alt="..."/>
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">Product Title</h5>
            <h5><small>By:Manik</small></h5>
            <div className="d-flex py-2">
              <div className="price pr-5">$12.89</div>
              <div className="review pl-5">****</div>
            </div>
            <p className="card-text py-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button className="btn px-5">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserItem;