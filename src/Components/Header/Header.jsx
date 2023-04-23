import React from 'react';
import './Header.css';
import logoImage from '../../Assets/Images/LoGoTiP.png';


const Header = () => {
  return (
    <div className="header">
      <a href="/deputies-of-nazarbayev/#/" className="logo"><img src={logoImage} alt="logo" className="logo" /></a>
      <div className="nav--bar">
        <a href="/deputies-of-nazarbayev/#/info" className="nav--link">Информэйшин</a>
        <a href="/deputies-of-nazarbayev/#/games" className="nav--link">Игры</a>
        <a href="#!" className="nav--link">Погода</a>
      </div>
      <div className="btn__Log-Reg">
        <a className="Btn LogIn" href='/deputies-of-nazarbayev/#/login'>Log In</a>
        <a className="Btn Register" href='/deputies-of-nazarbayev/#/register'>Register</a>
      </div>

    </div>
  )
}

export default Header