import React, { useState } from 'react'
import './DINODI.css'

import BGImage from '../../Assets/Images/DinoDiImg/BGImg.png';
import BGImage_Cactus from '../../Assets/Images/DinoDiImg/Cactus.png';
import BGImage_Dinozavr from '../../Assets/Images/DinoDiImg/Dinozavr.png';



export const DINODI = () => {


  const [clickState, setClickState] = useState(false);

  function handleClick() {
    setClickState(clickState => !clickState);
  }

  let toggleClassJumpCheck = clickState ? ' jump' : '';



  return (
    <div>
      <div className="wrapper">
      <div className='floor' onClick={handleClick} >
        <div className='floor_img-list'>
          <img src={BGImage} alt='BG' className='bg_img' />
          <img src={BGImage} alt='BG' className='bg_img' />
        </div>
        
        <img src={BGImage_Cactus} alt='BG-Cactus' className='Cactus' />
        <img src={BGImage_Dinozavr} alt='BG-Dinozavr' className={`Dinozavr${toggleClassJumpCheck}`} />
      </div>


      </div>
    </div>
  )
}
