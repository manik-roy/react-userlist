import React, {useState, useEffect,} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="single-user d-block m-auto">
        <div className="card">
        <span className="addIcon"><i class="fas fa-plus"></i></span>
        <div className="image-area">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=500&w=400" class="card-img-top" alt="user"/>
        </div>
        <div class="card-body text-center">
          <h2 class="card-title">Manik Roy</h2>
          <h6 class="card-subtitle text-muted "> <i class="far fa-envelope"></i>cm.dpi15@gmail.com</h6>
          <p className="text-muted pt-1"> <i class="fas fa-phone-alt"></i>+8801780849889</p>
          <p class="card-text p-3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-success ">More</button>
          <div className="socials-area pb-4">
            <ul>
              <li><a href="/" className="facebook"> <i className="fab fa-facebook-f"></i> </a></li>
              <li><a href="/" className="linkedin"> <i className="fab fa-linkedin-in"></i> </a></li>
              <li><a href="/" className="twitter"> <i className="fab fa-twitter"></i> </a></li>
              <li><a href="/" className="github"> <i className="fab fa-github"></i> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default App;
