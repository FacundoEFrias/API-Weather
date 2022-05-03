import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';




function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-transparent ">
      <span className="navbar-brand mb-0 h1 text-dark ">

        <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top " alt="" />



        Henry - Weather App
      </span>


      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
