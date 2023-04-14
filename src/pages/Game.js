import React from 'react';
import Header from '../Components/Header/Header';
import Games from '../Components/Game/Games';
import Footer from '../Components/Footer/Footer';

export const Game = () => {
  return (
    <div className='gamePage'>
        <Header />
        <Games />
        <Footer />
    </div>
  )
}
