import React from 'react';
import './index.css';

const HomePage =() => (
<div class="Section">
      <div id="headTitle">
        <h1 class="mainTitle">Wild Circus</h1>
        <p id="slogan">as wild as your wildest dreams!</p>
      </div>
      <nav class="navbar-first">
        <button class="navbar-second" type="button" data-toggle="collapse" data-target="#circusNavbar" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-icon"></span>
        </button>
        <a class="navbar-brand" href="#" id="brand">
          <i class="star" aria-hidden="true"></i>
          Wild Circus 
          <i class="star" aria-hidden="true"></i>
        </a>
        <div id="circusNavbar" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
            
 <li class="nav-item"><a class="nav-link" href="#perf">Performances</a></li>
 <li class="nav-item"><a class="nav-link" href="#perf">Casting</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#prices">Prices</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
)

export default HomePage;
