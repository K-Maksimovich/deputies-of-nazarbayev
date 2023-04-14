import React from 'react';
import './Header.css';
import logoImage from '../../Assets/Images/LoGoTiP.png';


const Header = () => {
  return (
    <div className="header">
      <a href="https://k-maksimovich.github.io/deputies-of-nazarbayev/" className="logo"><img src={logoImage} alt="logo" className="logo" /></a>
      <div className="nav--bar">
        <a href="/info" className="nav--link">Информэйшин</a>
        <a href="/games" className="nav--link">Игры</a>
        <a href="#!" className="nav--link">Погода</a>
      </div>
      <div className="btn__Log-Reg">
        <a className="Btn LogIn" href='#!'>Log In</a>
        <a className="Btn Register" href='#!'>Register</a>
      </div>

    </div>
  )
}

export default Header